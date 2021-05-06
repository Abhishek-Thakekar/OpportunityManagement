import { NgModule } from '@angular/core';
import { UpdateComponent } from './update.component';
import { RouterModule} from '@angular/router';
import { AuthGuard } from '../shared/guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateComponent],
  imports: [
      FormsModule,
    RouterModule.forChild( [
      { path : '',component : UpdateComponent , canActivate : [AuthGuard]}
    ])
  ]
})
export class UpdateModule { }
