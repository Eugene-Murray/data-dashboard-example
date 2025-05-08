import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, Policy } from '@data-dashboard/models';
import { selectIsPoliciesLoaded, selectPoliciesByPolicyHolderId } from '@data-dashboard/store';
import * as actions from '@data-dashboard/store';
import { Observable } from 'rxjs';
import { PolicyTypePipe } from '../../pipes/policy-type.pipe';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'data-dashboard-policy-holder-policies',
  imports: [CommonModule, RouterModule, PolicyTypePipe],
  templateUrl: './policy-holder-policies.component.html',
  styleUrl: './policy-holder-policies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolicyHolderPoliciesComponent {
  policies$: Observable<Policy[]> = new Observable();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.select(selectIsPoliciesLoaded).subscribe((isLoaded) => {
      if (!isLoaded) {
        this.store.dispatch(actions.getPolicies()); 
      } 
    });
    const id = this.route.snapshot.paramMap.get('id')!;
    this.policies$ = this.store.select(selectPoliciesByPolicyHolderId(Number(id)));     
  }
}
