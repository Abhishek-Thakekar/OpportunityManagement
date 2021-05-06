import { NgModule } from '@angular/core';
import { ViewComponent } from './view.component';
import { RouterModule} from '@angular/router';
import { AuthGuard } from '../shared/guard';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild( [
      { path : '',component : ViewComponent , canActivate : [AuthGuard]}
    ])
  ]
})
export class ViewModule { }
