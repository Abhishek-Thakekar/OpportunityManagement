import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opportunities } from '../opportunities';
import { OpportunitiesService } from '../opportunities.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id = 0;
  opportunity : Opportunities = {};
  flag = false;

  constructor(private opportunitiesService : OpportunitiesService , private route : ActivatedRoute) { }

  getOpportunity() {
    console.log();
    this.id = this.route.snapshot.params['id'];
    this.opportunitiesService.getOpportunityById(this.id).subscribe(
      (data) => {
        this.opportunity = data;
        if(this.opportunity)
          this.flag=true;
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    console.log();
    this.getOpportunity();
  }

}
