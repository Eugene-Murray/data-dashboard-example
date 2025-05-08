import { createReducer, on } from '@ngrx/store';
import { PolicyState } from '@wtw/models';
import * as actions from '../actions/policy.actions';

export const initialPolicyState: PolicyState = {
  policies: [],
  loadingPolicies: false,
  isPoliciesLoaded: false,
  deletingPolicy: false,
  addingPolicy: false,
  updatingPolicy: false,
  error: null,
};

export const policyReducer = createReducer(
  initialPolicyState,
  on(actions.getPolicies, (state): PolicyState => {
    return {
      ...state,
      loadingPolicies: true,
    };
  }),
  on(actions.getPoliciesSuccess, (state, action): PolicyState => {
    return {
      ...state,
      policies: action.policies,
      loadingPolicies: false,
      isPoliciesLoaded: true,
    };
  }),
  on(actions.getPoliciesFailed, (state, error): PolicyState => {
    console.log(error);
    return {
      ...state,
      isPoliciesLoaded: false,
      loadingPolicies: false,
    };
  }),
  on(actions.deletePolicy, (state): PolicyState => {
    return {
      ...state,
      deletingPolicy: true,
    };
  }),
  on(actions.deletePolicySuccess, (state, action): PolicyState => {
    return {
      ...state,
      policies: state.policies.filter((policy) => policy.id !== action.id),
      deletingPolicy: false,
    };
  }),
  on(actions.deletePolicyFailed, (state, error): PolicyState => {
    console.log(error);
    return {
      ...state,
      deletingPolicy: false,
    };
  }),
  on(actions.addPolicy, (state): PolicyState => {
    return {
      ...state,
      addingPolicy: true,
    };
  }),
  on(actions.addPolicySuccess, (state, action): PolicyState => {
    return {
      ...state,
      policies: [action.policy, ...state.policies],
      addingPolicy: false,
    };
  }),
  on(actions.addPolicyFailed, (state, error): PolicyState => {
    console.log(error);
    return {
      ...state,
      addingPolicy: false,
    };
  }),
  on(actions.updatePolicy, (state): PolicyState => {
    return {
      ...state,
      updatingPolicy: true
    };
  }),
  on(actions.updatePolicySuccess, (state, action): PolicyState => {
    return {
      ...state,
      policies: state.policies.map(policy => {
        if (policy.id === action.policy.id) {
          return { ...policy, ...action.policy };
        } else {
          if (policy.policyHolder.id === action.policy.policyHolder.id) {
            return { ...policy, policyHolder: action.policy.policyHolder };
          } else {
            return policy;
          }
        } 
      }),
      updatingPolicy: false
    };
  }),
  on(actions.updatePolicyFailed, (state, error): PolicyState => {
    console.log(error);
    return {
      ...state,
      updatingPolicy: false
    };
  }),
);
