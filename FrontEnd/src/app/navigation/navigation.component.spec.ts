import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { NavigationComponent } from './navigation.component';
import { SocialAuthServiceConfig } from 'angularx-social-login'
import { SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login'
import { AppRoutingModule } from '../app-routing.module';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
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
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should able to log out ', () => {
    console.log = jasmine.createSpy("log")
    component.signOut();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to init ', () => {
    console.log = jasmine.createSpy("log")
    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  })
});
