import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { RouterModule} from '@angular/router';
import { AuthGuard } from '../shared/guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchComponent],
  imports: [
      CommonModule,
      FormsModule,
    RouterModule.forChild( [
      { path : '',component : SearchComponent, canActivate : [AuthGuard]}
    ])
  ]
})
export class SearchModule { }
