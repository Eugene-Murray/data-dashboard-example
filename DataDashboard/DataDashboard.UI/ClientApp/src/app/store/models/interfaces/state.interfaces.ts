export interface AppState {
  policyState: PolicyState;
  policyHoldersState: PolicyHolderState;
  policyTypeDetailsState: PolicyTypeDetailsState;
}

export interface PolicyState {
  policies: Policy[];
  loadingPolicies: boolean;
  isPoliciesLoaded: boolean;
  deletingPolicy: boolean;
  addingPolicy: boolean;
  updatingPolicy: boolean;
  error: any;
}

export interface PolicyHolderState {
  policyHolders: PolicyHolder[];
  loadingPolicyHolders: boolean;
  isPolicyHoldersLoaded: boolean;
  error: any;
}

export interface PolicyTypeDetailsState {
  policyTypeDetails: PolicyTypeDetail[];
  loadingPolicyTypeDetails: boolean;
  isPolicyTypeDetailsLoaded: boolean;
  error: any;
}

export interface Policy {
  id?: number;
  policyNumber?: number;
  policyHolder: PolicyHolder;
  policyType?: PolicyType | number;
  policyTypeDetailId?: number | undefined;
  policyTypeDetail?: PolicyTypeDetail | undefined;
  isEditMode?: boolean;
}

export interface PolicyHolder {
  id?: number;
  name: string;
  age: number;
  gender: Gender | number;
}

export interface PolicyTypeDetail {
  id: number;
  policyName: number;
  policyDescription: string;
  policyType: PolicyType | number;
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export enum PolicyType {
  Life = 'Life Insurance',
  Health = 'Health Insurance',
  Auto = 'Auto Insurance',
  Home = 'Home Insurance'
}