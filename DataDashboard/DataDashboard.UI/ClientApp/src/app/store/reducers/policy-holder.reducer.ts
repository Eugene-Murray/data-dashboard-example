import { createReducer, on } from '@ngrx/store';
import { PolicyHolderState } from '@wtw/models';
import * as actions from '../actions/policy-holders.actions';

export const initialPolicyHolderState: PolicyHolderState = {
  policyHolders: [],
  loadingPolicyHolders: false,
  isPolicyHoldersLoaded: false,
  error: null,
};

export const policyHolderReducer = createReducer(
  initialPolicyHolderState,
  on(actions.getPolicyHolders, (state): PolicyHolderState => {
    return {
      ...state,
      loadingPolicyHolders: true,
      isPolicyHoldersLoaded: false,
    };
  }),
  on(actions.getPolicyHoldersSuccess, (state, action): PolicyHolderState => {
    return {
      ...state,
      policyHolders: action.policyHolders,
      loadingPolicyHolders: false,
      isPolicyHoldersLoaded: true,
    };
  }),
  on(actions.getPolicyHoldersFailed, (state, error): PolicyHolderState => {
    console.log(error);
    return {
      ...state,
      loadingPolicyHolders: false,
    };
  })
);
