import { createAction, props } from "@ngrx/store";
import { PolicyHolder } from '@data-dashboard/models';

export const getPolicyHolders         = createAction('[Policy Holders] Get all Policy Holders');
export const getPolicyHoldersSuccess  = createAction('[Policy Holders] Get all Policy Holders Success', props<{ policyHolders: PolicyHolder[] }>());
export const getPolicyHoldersFailed   = createAction('[Policy Holders] Get all Policy Holders Failed', props<any>());
