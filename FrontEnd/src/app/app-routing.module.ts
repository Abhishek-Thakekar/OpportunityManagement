import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { AuthGuard } from './shared/guard';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'login', component: AuthenticationComponent },
  { path: 'dashboard', component: OpportunityComponent , canActivate : [AuthGuard] },
  { path: 'analysis', loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: 'audits', loadChildren: () => import('./audit/audit.module').then(m => m.AuditModule) },
  { path: 'create', loadChildren: () => import('./opportunity/create/create.module').then(m => m.CreateModule) },
  { path: 'id/:id', loadChildren: () => import('./view/view.module').then(m => m.ViewModule) },
  { path: 'update/:id', loadChildren: () => import('./update/update.module').then(m => m.UpdateModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
