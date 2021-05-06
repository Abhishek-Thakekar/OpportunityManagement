import { NgModule } from '@angular/core';
import { AnalysisComponent } from './analysis.component';
import { RouterModule} from '@angular/router';
import { AuthGuard } from '../shared/guard';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    NgxChartsModule,
    // CommonModule,
    // BrowserAnimationsModule,
    RouterModule.forChild( [
      { path : '',component : AnalysisComponent , canActivate : [AuthGuard]}
    ])
  ]
})
export class AnalysisModule { }
