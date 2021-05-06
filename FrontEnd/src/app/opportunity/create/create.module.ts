import { NgModule } from '@angular/core';
import { CreateComponent } from './create.component';
import { RouterModule} from '@angular/router';
import { AuthGuard } from '../../shared/guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent],
  imports: [
      FormsModule,
      ReactiveFormsModule,
    RouterModule.forChild( [
      { path : '',component : CreateComponent , canActivate : [AuthGuard]}
    ])
  ]
})
export class CreateModule { }
