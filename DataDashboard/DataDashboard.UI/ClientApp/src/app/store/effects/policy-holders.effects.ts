import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PolicyHolderService } from '@wtw/services';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as actions from '../actions/policy-holders.actions';

@Injectable()
export class PolicyHoldersEffects {
  constructor(private actions$: Actions, private policyHolderService: PolicyHolderService) {}

  getPolicyHolders$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getPolicyHolders),
    switchMap(() => this.policyHolderService.getPolicyHolders().pipe(
      map(response => actions.getPolicyHoldersSuccess({ policyHolders: response })),
      catchError(err => of(actions.getPolicyHoldersFailed(err)))
    ))
  ));
}