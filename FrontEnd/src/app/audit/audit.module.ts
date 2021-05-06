import { NgModule } from '@angular/core';
import { AuditComponent } from './audit.component';
import { RouterModule} from '@angular/router';
import { AuthGuard } from '../shared/guard';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AuditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild( [
      { path : '',component : AuditComponent , canActivate : [AuthGuard]}
    ])
  ]
})
export class AuditModule { }
