import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialAuthServiceConfig } from 'angularx-social-login';
import { SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './opportunity/create/create.component';
import { UpdateComponent } from './update/update.component';

import { AuthGuard } from './shared/guard/index';
import { SharedService } from './services/shared.service';
import { ViewComponent } from './view/view.component';





@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    OpportunityComponent,
    NavigationComponent,
    AnalysisComponent,
    SearchComponent,
    CreateComponent,
    UpdateComponent,
    ViewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '756272229800-uauh8h5974nv2gm3kf5rmmat9rqg01d6.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    AuthGuard,
    SharedService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
