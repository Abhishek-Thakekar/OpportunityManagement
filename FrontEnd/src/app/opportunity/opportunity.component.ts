import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opportunities } from '../opportunities';
import { OpportunitiesService } from '../opportunities.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css'],
})
export class OpportunityComponent implements OnInit {
  opportunities?: Opportunities[];
  tmpStatus: [{
    opportunities: Opportunities;
    status: boolean;
  }] = [{
    opportunities:{},
    status : true
  }];

  constructor(
    private opportunitiesService: OpportunitiesService,
    private router: Router
  ) {}
  
  onClick(id : any){
    console.log("test ",id);;
    this.router.navigate(['/id/',id])
  }
  onEdit(id?: number): void {
    if(id)
      this.router.navigate(['update/id/', id]);
  }

  onDelete(id?: number): void {
    if (id) {
      this.opportunitiesService.deleteOpportunity(id).subscribe((data) => {
        this.getOpportunities();
      });
    }
  }

  ngOnInit(): void {
    this.getOpportunities();
  }

  private getOpportunities() {
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
              if (endDate){
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
