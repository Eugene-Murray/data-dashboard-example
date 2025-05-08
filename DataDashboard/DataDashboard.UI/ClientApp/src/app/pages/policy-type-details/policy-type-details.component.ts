import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { AppState, PolicyTypeDetail } from '@wtw/models';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as actions from '@wtw/store';
import {
  selectIsPolicyTypeDetailsLoaded,
  selectIsPolicyTypeDetailsLoading,
  selectPolicyTypeCount,
  selectPolicyTypeDetails,
} from '@wtw/store';
import { PolicyTypePipe } from 'src/app/pipes/policy-type.pipe';
import { ChartModule } from 'primeng/chart';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'wtw-policy-type-details',
  imports: [CommonModule, PolicyTypePipe, ChartModule],
  templateUrl: './policy-type-details.component.html',
  styleUrl: './policy-type-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyTypeDetailsComponent implements OnInit {
  isLoading$: Observable<boolean> = new Observable();
  policyTypeDetails$: Observable<PolicyTypeDetail[]> = new Observable();
  chartData: any;
  chartOptions: any;
  platformId = inject(PLATFORM_ID);
  private policyTypeCount: { [key: string]: number } = {};

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.store.select(actions.selectIsPoliciesLoaded).subscribe((isLoaded) => {
      if (!isLoaded) {
        this.store.dispatch(actions.getPolicies());
      }
    });
    this.store
      .select(selectIsPolicyTypeDetailsLoaded)
      .pipe(untilDestroyed(this))
      .subscribe((isAlreadyLoaded) => {
        if (!isAlreadyLoaded) {
          this.store.dispatch(actions.getPolicyTypeDetails());
        }
        this.isLoading$ = this.store.select(selectIsPolicyTypeDetailsLoading);
        this.policyTypeDetails$ = this.store.select(selectPolicyTypeDetails);
        this.store
          .select(selectPolicyTypeCount)
          .pipe(untilDestroyed(this))
          .subscribe((policyTypeCount) => {
            this.policyTypeCount = policyTypeCount;
            this.initChart();
            this.cd.markForCheck();
          });
      });
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.chartData = {
        labels: ['Home', 'Auto', 'Life', 'Health'],
        datasets: [
          {
            data: [
              this.policyTypeCount['Home and BTL Insurance'] || 0,
              this.policyTypeCount['Life Cover Insurance'] || 0,
              this.policyTypeCount['Health Active Insurance'] || 0,
              this.policyTypeCount['Auto Car and Van Insurance'] || 0,
            ],
            backgroundColor: [
              documentStyle.getPropertyValue('--p-cyan-500'),
              documentStyle.getPropertyValue('--p-orange-500'),
              documentStyle.getPropertyValue('--p-gray-500'),
              documentStyle.getPropertyValue('--p-green-500'),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--p-cyan-400'),
              documentStyle.getPropertyValue('--p-orange-400'),
              documentStyle.getPropertyValue('--p-gray-400'),
            ],
          },
        ],
      };
      this.chartOptions = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: textColor,
            },
          },
        },
      };
      this.cd.markForCheck();
    }
  }
}
