import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Audits } from '../audits';
import { OpportunitiesService } from '../opportunities.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})

export class AuditComponent implements OnInit {

  audits : Audits[] = [] ;
  constructor(private opportunitiesService: OpportunitiesService , private router : Router) {}

  ngOnInit(): void {
    console.log();
    this.getOpportunities();
  }

  getOpportunities() {
    console.log();
    this.opportunitiesService.getAudits().subscribe(
      (data) => {
        this.audits = data;
      },
      (error) => console.log('error')
    );
  }

  onClick(id : any){
    console.log();
    this.router.navigate(['/id/',id])
  }

}
