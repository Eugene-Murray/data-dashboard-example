import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PolicyService } from '@wtw/services';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as actions from '../actions/policy.actions';
import { Store } from '@ngrx/store';
import { AppState, Policy, PolicyTypeDetail } from '@wtw/models';
import { selectPolicyTypeDetails } from '../selectors';
import { policyTypeToNumber } from '../../common/helpers';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class PolicyEffects {
  constructor(
    private actions$: Actions,
    private policyService: PolicyService,
    private store: Store<AppState>,
    private toastr: ToastrService
  ) {}

  getPolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getPolicies),
      withLatestFrom(this.store.select(selectPolicyTypeDetails)),
      switchMap(([_, policyTypeDetails]) => {
        return this.policyService.getPolicies().pipe(
          map((response) => {
            const policies = response.map((policy) => {
              const policyTypeDetail = policyTypeDetails.find(
                (pt) => pt.id === policy.policyTypeDetailId
              );
              return { ...policy, policyTypeDetail };
            });
            return actions.getPoliciesSuccess({ policies });
          }),
          catchError((err) => of(actions.getPoliciesFailed(err)))
        );
      })
    )
  );

  deletePolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deletePolicy),
      switchMap((data) => {
        return this.policyService.deletePolicy(data.id).pipe(
          map((response) => { 
            this.toastr.success('Policy deleted successfully');
            return actions.deletePolicySuccess({ id: data.id });
          }),
          catchError((err) => of(actions.deletePolicyFailed(err)))
        );
      })
    )
  );

  addPolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.addPolicy),
      withLatestFrom(this.store.select(selectPolicyTypeDetails)),
      switchMap(([data, policyTypeDetails]) => {
        const addPolicy = this.setPolicy(data, policyTypeDetails);
        return this.policyService.addPolicy(addPolicy).pipe(
          map((response) => { 
            response.policyTypeDetail = policyTypeDetails.find(
              (x) => x.policyType === policyTypeToNumber(data.policy.policyType) //policyTypeNum
            );
            this.toastr.success('Policy created successfully');
            return actions.addPolicySuccess({ policy: response });
          }),
          catchError((err) => of(actions.addPolicyFailed(err)))
        );
      })
    )
  );

  updatePolicy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updatePolicy),
      withLatestFrom(this.store.select(selectPolicyTypeDetails)),
      switchMap(([data, policyTypeDetails]) => {
        const updatePolicy = this.setPolicy(data, policyTypeDetails);
        return this.policyService.updatePolicy(updatePolicy).pipe(
          map((response) => { 
            this.toastr.success('Policy updated successfully');
            return actions.updatePolicySuccess({ policy: updatePolicy });
          }),
          catchError((err) => of(actions.updatePolicyFailed(err)))
        );
      })
    )
  );

  private setPolicy = (data: { policy: Policy }, policyTypeDetails: PolicyTypeDetail[]) => {
    const policyTypeNum = policyTypeToNumber(data.policy.policyType);
        const policyTypeDetailId = policyTypeDetails.find(
          (x) => x.policyType === policyTypeNum
        )?.id;
        const updatePolicy = {
          ...data.policy,
          policyTypeDetailId,
          policyHolder: {
            ...data.policy.policyHolder,
            gender: data.policy.policyHolder.gender === 'Male' ? 0 : 1,
          },
          policyTypeDetail: policyTypeDetails.find(
            (x) => x.policyType === policyTypeNum
          )
        };
        return updatePolicy;
  }
}
