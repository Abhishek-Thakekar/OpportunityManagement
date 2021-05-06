import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  loggedIn = true;
  img_url?: string | null;

  signOut(): void {
    console.log("signing out");
    localStorage.removeItem('img_url');
    localStorage.removeItem('AUTH_TOKEN');
    localStorage.removeItem('username');
    localStorage.removeItem('useremail');
    this.authService.signOut(true);
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    console.log();
    this.img_url = localStorage.getItem('img_url');
    // console.log('share service nav com', this.sharedService.user);
  }
}
