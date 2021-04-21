import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './opportunity/create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { AuthGuard } from './shared/guard';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: HomeComponent , canActivate : [AuthGuard] },
  { path: 'login', component: AuthenticationComponent },
  { path: 'dashboard', component: OpportunityComponent , canActivate : [AuthGuard] },
  { path: 'analysis', component: AnalysisComponent , canActivate : [AuthGuard] },
  { path: 'search', component: SearchComponent , canActivate : [AuthGuard] },
  { path: 'create', component: CreateComponent , canActivate : [AuthGuard] },
  { path: 'update/id/:id', component: UpdateComponent , canActivate : [AuthGuard] },
  { path: 'id/:id', component: ViewComponent , canActivate : [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
