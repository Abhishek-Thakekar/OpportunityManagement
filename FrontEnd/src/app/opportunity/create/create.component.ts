import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Opportunities } from 'src/app/opportunities';
import { OpportunitiesService } from '../../opportunities.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  opportunityForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    vacancy: new FormControl(''),
    location: new FormControl(''),
    skills: new FormControl(''),
    endDate : new FormControl(Date)
  });

  opportunity: Opportunities = {};

  constructor(
    private router: Router,
    private opportunitiesService: OpportunitiesService
  ) {}

  ngOnInit() {}

  saveOpportunity() {
    console.log('post opportunity ', this.opportunity);
    this.opportunitiesService.createOpportunity(this.opportunity).subscribe(
      (data) => {},
      (error) => console.log('error in saving data')
    );
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {
    this.opportunity = this.opportunityForm.value;
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
    this.opportunity.startDate = new  Date();
    this.opportunity.mname = localStorage.getItem('username');
    this.opportunity.memail = localStorage.getItem('useremail');
    this.saveOpportunity();
    this.router.navigate(['/']);
  }
}
