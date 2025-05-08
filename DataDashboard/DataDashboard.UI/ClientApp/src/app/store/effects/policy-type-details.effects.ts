import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PolicyTypeDetailService } from '@data-dashboard/services';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as actions from '../actions/policy-type-details.actions';

@Injectable()
export class PolicyTypeDetailsEffects {
  constructor(private actions$: Actions, private policyTypeDetailService: PolicyTypeDetailService) {}

  getPolicyHolders$ = createEffect(() => this.actions$.pipe(
      ofType(actions.getPolicyTypeDetails),
      switchMap(() => this.policyTypeDetailService.getPolicyTypeDetails().pipe(
        map(response => actions.getPolicyTypeDetailsSuccess({ policyTypeDetails: response })),
        catchError(err => of(actions.getPolicyTypeDetailsFailed(err)))
      ))
    ));
}
