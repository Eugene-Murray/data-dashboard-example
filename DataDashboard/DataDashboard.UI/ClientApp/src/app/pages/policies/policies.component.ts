import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppState, Policy } from '@data-dashboard/models';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '@data-dashboard/store';
import { 
  selectIsPoliciesLoading, 
  selectIsPolicyTypeDetailsLoaded, 
  selectPolicies, 
  selectPoliciesByHolderName, 
  selectPoliciesOrderedByPolicyHolder, 
  selectPoliciesOrderedByType 
} from '@data-dashboard/store';
import { PoliciesDataEditorComponent } from '../../components/policies-data-editor/policies-data-editor.component';
import { PoliciesDataTableComponent } from '../../components/policies-data-table/policies-data-table.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'data-dashboard-policies',
  imports: [CommonModule, PoliciesDataTableComponent, PoliciesDataEditorComponent],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoliciesComponent {
  isLoading$: Observable<boolean> = new Observable();
  policies$: Observable<Policy[]> = new Observable();
  selectedPolicyToEdit: Policy | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectIsPoliciesLoading);
    this.policies$ = this.store.select(selectPolicies);
    this.store.select(selectIsPolicyTypeDetailsLoaded)
    .pipe(untilDestroyed(this))
    .subscribe(isAlreadyLoaded => {
      if (isAlreadyLoaded) {
        this.store.dispatch(actions.getPolicies()); 
      } else {
        this.store.dispatch(actions.getPolicyTypeDetails());
      }
    });
  }

  onDelete(id: number): void {
    this.store.dispatch(actions.deletePolicy({ id }));
  }

  onCreateNewPolicy(policy: Policy): void {
    this.store.dispatch(actions.addPolicy({ policy }));
  }

  onEditExistingPolicy(policy: Policy): void {
    this.store.dispatch(actions.updatePolicy({ policy }));
  }

  onSelectedPolicyToEdit(policy: Policy): void {
    this.selectedPolicyToEdit = policy;
  }

  onPolicyHolderNameChange(policyHolderName: string): void {
    this.policies$ = this.store.select(selectPoliciesByHolderName(policyHolderName));
  }

  onOrderPoliciesByType(orderByType: string): void {
    this.policies$ = this.store.select(selectPoliciesOrderedByType);
  }

  onOrderPoliciesByPolicyHolder($orderByType: string): void {
    this.policies$ = this.store.select(selectPoliciesOrderedByPolicyHolder);
  }
}
