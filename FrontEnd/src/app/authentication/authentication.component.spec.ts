import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthenticationComponent } from './authentication.component';
import { SocialAuthServiceConfig } from 'angularx-social-login'
import { SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login'
import { AppRoutingModule } from '../app-routing.module';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationComponent ],
      imports: [
        AppRoutingModule,
        SocialLoginModule,
        HttpClientTestingModule,
        RouterTestingModule
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
                )
              }
            ]
          } as SocialAuthServiceConfig,
        },
      ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should able to sign in ', () => {
    console.log = jasmine.createSpy("log")
    component.signInWithGoogle();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to init ', () => {
    console.log = jasmine.createSpy("log")
    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  })
});
