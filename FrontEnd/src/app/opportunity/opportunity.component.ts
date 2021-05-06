import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Opportunities } from '../opportunities';
import { OpportunitiesService } from '../opportunities.service';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css'],
})
export class OpportunityComponent implements OnInit {
  opportunities?: Opportunities[];
  tmpStatus: [
    {
      opportunities: Opportunities;
      status: boolean;
    }
  ] = [
    {
      opportunities: {},
      status: true,
    },
  ];

  constructor(
    private opportunitiesService: OpportunitiesService,
    private router: Router
  ) {
    // this.router.events
    //   .pipe(
    //     filter((evt: any) => evt instanceof RoutesRecognized),
    //     pairwise()
    //   )
    //   .subscribe((events: RoutesRecognized[]) => {
    //     let previousUrl = events[0].urlAfterRedirects;
    //     let currentUrl = events[1].urlAfterRedirects;

    //     if((previousUrl == '/create' || previousUrl == '/update/id/{id}') && currentUrl == '/dashboard' ){
    //       console.log("updating");
    //       window.location.reload();
    //     }
    //     console.log('previous url', events[0].urlAfterRedirects);
    //     console.log('current url', events[1].urlAfterRedirects);
    //   });
    // console.log('constructor dashboard');
  }

  onClick(id: any) {
    console.log('test ', id);
    // this.router.navigate(['/id/',id])
  }
  onEdit(id?: number): void {
    console.log('test ', id);
    if (id) this.router.navigate(['update/', id]);
  }

  onDelete(id?: number): void {
    console.log('test ', id);
    if (id) {
      var result = confirm('Want to delete?');
      if (result) {
        this.opportunitiesService.deleteOpportunity(id).subscribe((data) => {
          this.getOpportunities();
        });
      }
    }
  }

  ngOnInit(): void {
    console.log();
    this.getOpportunities();
  }

  getOpportunities() {
    let email: any = localStorage.getItem('useremail');
    if (email) {
      this.opportunitiesService
        .getOpportunitiesByEmail(email)
        .subscribe((data) => {
          this.opportunities = data;
          if (this.opportunities) {
            for (let i = 0; i < this.opportunities.length; i++) {
              let temp: {
                opportunities: Opportunities;
                status: boolean;
              } = {
                opportunities: this.opportunities[i],
                status: true,
              };
              let current = new Date();
              let endDate = this.opportunities[i].endDate;
              if (endDate) {
                endDate = new Date(endDate);
                if (endDate < current) {
                  temp.status = false;
                }
              }
              this.tmpStatus?.push(temp);
            }
            this.tmpStatus.shift();
            // console.log(this.tmpStatus)
          }
        });
    }
  }
}
