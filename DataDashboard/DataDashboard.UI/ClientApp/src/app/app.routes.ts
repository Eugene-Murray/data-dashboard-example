import { Route } from '@angular/router';
import { PoliciesComponent } from './pages/policies/policies.component';
import { PolicyHoldersComponent } from './pages/policy-holders/policy-holders.component';
import { PolicyTypeDetailsComponent } from './pages/policy-type-details/policy-type-details.component';
import { PolicyHolderPoliciesComponent } from './pages/policy-holder-policies/policy-holder-policies.component';

export const appRoutes: Route[] = [
    { path: 'policies', component: PoliciesComponent },
    { path: '', redirectTo: '/policies', pathMatch: 'full' },
    { path: 'policy-type-details', component: PolicyTypeDetailsComponent },
    { path: 'policy-holders', component: PolicyHoldersComponent },
    { path: 'policy-holder-policies/:id', component: PolicyHolderPoliciesComponent },
    {
        path: '**',
        redirectTo: '/policies',
      }
];