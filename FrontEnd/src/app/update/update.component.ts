import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Opportunities } from 'src/app/opportunities';
import { OpportunitiesService } from '../opportunities.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  opportunity: Opportunities = {};
  id = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private opportunitiesService: OpportunitiesService
  ) {}

  ngOnInit() {
    console.log();
    this.id = this.route.snapshot.params['id'];
    this.opportunitiesService.getOpportunityById(this.id).subscribe(
      (data) => {
        if (localStorage.getItem('useremail') != data.memail) {
          this.router.navigate(['/dashboard']);
        }
        this.opportunity = data;
      },
      (error) => console.log(error)
    );
  }

  saveOpportunity() {
    console.log();
    this.opportunitiesService.updateOpportunity(this.id , this.opportunity).subscribe(
      (data) => {},
      (error) => console.log('error in saving data')
    );
  }

  onCancel() {
    console.log();
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {
    console.log();
    if (
      !(
        this.opportunity.title &&
        this.opportunity.vacancy &&
        this.opportunity.skills &&
        this.opportunity.description &&
        this.opportunity.location &&
        this.opportunity.endDate
      )
    ){
      alert("Field cannot be empty");
      return;
    }
    this.opportunity.mname = localStorage.getItem('username');
    this.opportunity.memail = localStorage.getItem('useremail');
    this.saveOpportunity();
    this.router.navigate(['/dashboard']);
  }
}
