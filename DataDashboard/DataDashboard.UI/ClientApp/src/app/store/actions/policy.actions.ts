import { createAction, props } from "@ngrx/store";
import { Policy } from '@data-dashboard/models';

export const getPolicies         = createAction('[Policy] Get all Policies');
export const getPoliciesSuccess  = createAction('[Policy] Get all Policies Success', props<{ policies: Policy[] }>());
export const getPoliciesFailed   = createAction('[Policy] Get all Policies Failed', props<any>());

export const deletePolicy           = createAction('[Policy] Delete Policy', props<{ id: number }>());
export const deletePolicySuccess    = createAction('[Policy] Delete Policy Success', props<{ id: number }>());
export const deletePolicyFailed     = createAction('[Policy] Delete Policy Fail', props<any>());

export const addPolicy           = createAction('[Policy] Add Policy', props<{ policy: Policy }>());
export const addPolicySuccess    = createAction('[Policy] Add Policy Success', props<{ policy: Policy }>());
export const addPolicyFailed     = createAction('[Policy] Add Policy Fail', props<any>());

export const updatePolicy           = createAction('[Policy] Update Policy', props<{ policy: Policy }>());
export const updatePolicySuccess    = createAction('[Policy] Update Policy Success', props<{ policy: Policy }>());
export const updatePolicyFailed     = createAction('[Policy] Update Policy Fail', props<any>());
