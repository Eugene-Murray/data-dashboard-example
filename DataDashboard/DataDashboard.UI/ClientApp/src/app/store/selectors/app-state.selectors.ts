import { createSelector } from '@ngrx/store';
import { AppState } from '../models';

export const selectAppState                 = (appState: AppState) => appState;
export const selectPolicyState              = (appState: AppState) => appState.policyState;
export const selectPolicyHoldersState       = (appState: AppState) => appState.policyHoldersState;
export const selectPolicyTypeDetailsState   = (appState: AppState) => appState.policyTypeDetailsState;