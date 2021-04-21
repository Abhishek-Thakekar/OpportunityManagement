import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Manager } from '../manager';
import { OpportunitiesService } from '../opportunities.service';


@Injectable()
export class SharedService {
  user?: SocialUser;
  manager : Manager ={};

  constructor(private authService: SocialAuthService, private router: Router,    private opportunitiesService : OpportunitiesService
    ) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.manager.email = user.email;
      this.manager.name = user.name;
      this.manager.profile_img = user.photoUrl;
      this.opportunitiesService.createManager(this.manager).subscribe(data =>{
        console.log("saving manager" , data);  
      } , error =>{console.log(error)});
      localStorage.setItem('AUTH_TOKEN', user.authToken);
      localStorage.setItem('username', user.name);
      localStorage.setItem('useremail', user.email);
      localStorage.setItem('img_url', user.photoUrl);
      this.router.navigate(['/']);
    });
  }
}
