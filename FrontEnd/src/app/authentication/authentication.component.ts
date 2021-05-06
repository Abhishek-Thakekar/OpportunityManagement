import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  user?: SocialUser;
  loggedIn?: boolean;

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) {}

  signInWithGoogle(): void {
    console.log();
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(['/search']);
  }

  ngOnInit() {
    console.log();
    if (localStorage.getItem('AUTH_TOKEN')) {
      this.router.navigate(['/search']);
    }
  }
}
