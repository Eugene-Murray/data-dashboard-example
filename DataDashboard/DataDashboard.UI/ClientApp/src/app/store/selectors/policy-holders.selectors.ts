import { createSelector } from "@ngrx/store";
import { PolicyHolderState } from "@data-dashboard/models";
import { selectPolicyHoldersState } from "./app-state.selectors";

export const selectIsPolicyHoldersLoading   = createSelector(selectPolicyHoldersState, (policyHoldersState) => policyHoldersState.loadingPolicyHolders);

export const selectIsPolicyHolderdsLoaded   = createSelector(selectPolicyHoldersState, (policyHoldersState) => policyHoldersState.isPolicyHoldersLoaded);

export const selectPolicyHolders  = createSelector(selectPolicyHoldersState, (policyHoldersState: PolicyHolderState) => {
  return policyHoldersState.policyHolders;
});
