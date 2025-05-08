import { createAction, props } from "@ngrx/store";
import { PolicyTypeDetail } from '@wtw/models';

export const getPolicyTypeDetails         = createAction('[Policy Type Details] Get all Policy Type Details');
export const getPolicyTypeDetailsSuccess   = createAction('[Policy Type Details] Get all Policy Type Details Success', props<{ policyTypeDetails: PolicyTypeDetail[] }>());
export const getPolicyTypeDetailsFailed    = createAction('[Policy Type Details] Get all Policy Type Details Failed', props<any>());