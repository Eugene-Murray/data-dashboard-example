import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Gender, Policy, PolicyType } from '@wtw/models';
import { PolicyTypePipe } from '../../pipes/policy-type.pipe';
import { cloneDeep } from 'lodash';
import { policyTypeToString } from '../../common/helpers';

@Component({
  selector: 'wtw-policies-data-table',
  imports: [CommonModule, FormsModule, PolicyTypePipe],
  templateUrl: './policies-data-table.component.html',
  styleUrl: './policies-data-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoliciesDataTableComponent {
  @Input() policies: Policy[] | null = [];
  @Input() isLoading: boolean | null = false;
  @Output() filterByPolicyHolderName = new EventEmitter<string>();
  @Output() selectedPolicyToDelete = new EventEmitter<number>();
  @Output() selectedPolicyToEdit = new EventEmitter<Policy>();
  @Output() orderPoliciesByType = new EventEmitter<string>();
  @Output() orderPoliciesByPolicyHolder = new EventEmitter<string>();
  filterPolicyHolderName = '';

  onDelete(id: number | undefined): void {
    if (!id) {
      return; 
    }
    this.selectedPolicyToDelete.emit(id);
  }

  onEdit(policy: Policy): void {
    const selectedPolicy = cloneDeep(policy);
    selectedPolicy.isEditMode = true;
    selectedPolicy.policyHolder.gender = selectedPolicy.policyHolder.gender === 0 ? Gender.Male : Gender.Female;
    selectedPolicy.policyType = <PolicyType>policyTypeToString(selectedPolicy?.policyTypeDetail?.policyType);
    this.selectedPolicyToEdit.emit(selectedPolicy);
  }

  onPolicyHolderNameChange(policyHolderName: string): void {
    this.filterByPolicyHolderName.emit(policyHolderName);
  }

  onOrderPoliciesByType(): void {
    this.orderPoliciesByType.emit('');
  }

  onOrderPoliciesByPolicyHolder(): void {
    this.orderPoliciesByPolicyHolder.emit('');
  }
}
