import { createSelector } from "@ngrx/store";
import { selectPolicyState } from "./app-state.selectors";
import { PolicyState } from "@wtw/models";
import { policyTypeToString } from "../../common/helpers";

export const selectIsPoliciesLoading   = createSelector(selectPolicyState, (policyState) => policyState.loadingPolicies);

export const selectIsPoliciesLoaded   = createSelector(selectPolicyState, (policyState) => policyState.isPoliciesLoaded);

export const selectPolicies  = createSelector(selectPolicyState, (policyState: PolicyState) => {
  return policyState.policies;
});

export const selectPolicyTypeCount  = createSelector(selectPolicyState, (policyState: PolicyState) => {
  return policyState.policies.reduce((acc: { [key: string]: number }, policy) => {
    if (policy.policyTypeDetail) {
      acc[policy.policyTypeDetail.policyName] = (acc[policy.policyTypeDetail.policyName] || 0) + 1;
    }
    return acc;
  }, {});
});

export const selectPoliciesByHolderName = (holderName: string) =>
  createSelector(selectPolicyState, (policyState: PolicyState) =>
    policyState.policies.filter((policy) =>
      policy.policyHolder.name.toLowerCase().includes(holderName.toLowerCase())
    )
  );

  export const selectPoliciesByPolicyHolderId = (id: number) =>
    createSelector(selectPolicyState, (policyState: PolicyState) => {
      return policyState.policies.filter((policy) => { 
          return policy.policyHolder.id === id ? policy : null;
      });
    }
      
    );

  export const selectPoliciesOrderedByType = createSelector(
    selectPolicyState,
    (policyState: PolicyState) => [...policyState.policies].sort((a, b) => policyTypeToString(a.policyTypeDetail?.policyType).localeCompare(policyTypeToString(b.policyTypeDetail?.policyType))) 
  );

  export const selectPoliciesOrderedByPolicyHolder = createSelector(
    selectPolicyState,
    (policyState: PolicyState) => [...policyState.policies].sort((a, b) => a.policyHolder.name.localeCompare(b.policyHolder.name)) 
  );