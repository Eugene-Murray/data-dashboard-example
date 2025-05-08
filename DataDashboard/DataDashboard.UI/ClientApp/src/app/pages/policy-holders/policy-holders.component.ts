import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState, PolicyHolder } from '@data-dashboard/models';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as actions from '@data-dashboard/store';
import { 
  selectIsPolicyHolderdsLoaded, 
  selectIsPolicyHoldersLoading, 
  selectPolicyHolders 
} from '@data-dashboard/store';
import { Observable } from 'rxjs';
import { GenderPipe } from '../../pipes/gender.pipe';
import { RouterModule } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'data-dashboard-policy-holders',
  imports: [CommonModule, GenderPipe, RouterModule],
  templateUrl: './policy-holders.component.html',
  styleUrl: './policy-holders.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyHoldersComponent implements OnInit {
  isLoading$: Observable<boolean> = new Observable();
  policyHolders$: Observable<PolicyHolder[]> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectIsPolicyHolderdsLoaded)
        .pipe(untilDestroyed(this))
        .subscribe(isAlreadyLoaded => {
          if (!isAlreadyLoaded) {
            this.isLoading$ = this.store.select(selectIsPolicyHoldersLoading);
            this.policyHolders$ = this.store.select(selectPolicyHolders);
            this.store.dispatch(actions.getPolicyHolders());
          } else {
            this.policyHolders$ = this.store.select(selectPolicyHolders);
          }
    });
  }
}
