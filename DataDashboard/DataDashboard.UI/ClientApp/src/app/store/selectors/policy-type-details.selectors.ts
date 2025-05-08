import { createSelector } from "@ngrx/store";
import { PolicyTypeDetailsState } from "@data-dashboard/models";
import { selectPolicyTypeDetailsState } from "./app-state.selectors";

export const selectIsPolicyTypeDetailsLoading   = createSelector(selectPolicyTypeDetailsState, (policyTypeDetailsState) => policyTypeDetailsState.loadingPolicyTypeDetails);

export const selectIsPolicyTypeDetailsLoaded   = createSelector(selectPolicyTypeDetailsState, (policyTypeDetailsState) => policyTypeDetailsState.isPolicyTypeDetailsLoaded);

export const selectPolicyTypeDetails  = createSelector(selectPolicyTypeDetailsState, (policyTypeDetailsState: PolicyTypeDetailsState) => {
  return policyTypeDetailsState.policyTypeDetails;
});
