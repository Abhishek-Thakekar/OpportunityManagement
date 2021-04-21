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

  constructor(private opportunitiesService : OpportunitiesService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.opportunitiesService.getOpportunityById(this.id).subscribe(
      (data) => {
        this.opportunity = data;
      },
      (error) => console.log(error)
    );  }

}
