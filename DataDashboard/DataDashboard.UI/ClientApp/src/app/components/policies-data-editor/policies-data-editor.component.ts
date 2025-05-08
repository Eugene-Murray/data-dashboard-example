import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PolicyType, Gender, Policy } from '@wtw/models';

@Component({
  selector: 'wtw-policies-data-editor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './policies-data-editor.component.html',
  styleUrl: './policies-data-editor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoliciesDataEditorComponent implements OnInit, OnChanges {
  policyForm!: FormGroup;
  genders = Object.values(Gender);
  policyType = Object.values(PolicyType);
  @Input() selectedPolicyToEdit: Policy | null = null;
  @Output() createNewPolicy = new EventEmitter<Policy>();
  @Output() editExistingPolicy = new EventEmitter<Policy>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.policyForm = this.fb.group({
      policyNumber: [{ value: '', disabled: true }],
      policyType: ['', Validators.required],
      policyHolder: this.fb.group({
        name: ['', Validators.required],
        age: [null, [Validators.required, Validators.min(0)]],
        gender: ['', Validators.required]
      })
    });
  }

  ngOnChanges(changes: SimpleChanges): void { 
    if (changes.selectedPolicyToEdit && this.selectedPolicyToEdit) {
      this.policyForm.patchValue(this.selectedPolicyToEdit);
    }
  }

  onSubmit(): void {
    if (this.policyForm.valid) {
      if (this.selectedPolicyToEdit?.isEditMode) {
        this.editPolicy();
      } else {
        this.addPolicy();
      }
    } else {
      console.error('Form is invalid.');
    }
  }

  addPolicy() {
    const policy: Policy = this.policyForm.value;
    this.createNewPolicy.emit(policy);
  }
 
  editPolicy() {
    const policy: Policy = this.policyForm.value;
    policy.id = this.selectedPolicyToEdit?.id;
    policy.policyNumber = this.selectedPolicyToEdit?.policyNumber;
    policy.policyHolder.id = this.selectedPolicyToEdit?.policyHolder.id;
    this.editExistingPolicy.emit(policy);
  }

  clearPolicy() {
    this.policyForm.reset();
    this.selectedPolicyToEdit = null;
  }
}
