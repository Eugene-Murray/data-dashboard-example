import { createReducer, on } from '@ngrx/store';
import { PolicyTypeDetailsState } from '@data-dashboard/models';
import * as actions from '../actions/policy-type-details.actions';

export const initialPolicyTypeDetailState: PolicyTypeDetailsState = {
  policyTypeDetails: [],
  loadingPolicyTypeDetails: false,
  isPolicyTypeDetailsLoaded: false,
  error: null,
};

export const policyTypeDetailReducer = createReducer(
  initialPolicyTypeDetailState,
  on(actions.getPolicyTypeDetails, (state): PolicyTypeDetailsState => {
    return {
      ...state,
      loadingPolicyTypeDetails: true,
    };
  }),
  on(
    actions.getPolicyTypeDetailsSuccess,
    (state, action): PolicyTypeDetailsState => {
      return {
        ...state,
        policyTypeDetails: action.policyTypeDetails,
        loadingPolicyTypeDetails: false,
        isPolicyTypeDetailsLoaded: true,
      };
    }
  ),
  on(
    actions.getPolicyTypeDetailsFailed,
    (state, error): PolicyTypeDetailsState => {
      console.log(error);
      return {
        ...state,
        loadingPolicyTypeDetails: false,
      };
    }
  )
);
