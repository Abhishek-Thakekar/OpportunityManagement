import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opportunities } from '../opportunities';
import { OpportunitiesService } from '../opportunities.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  selected = 'all';
  typed = '';
  opportunities?: Opportunities[];
  tempOpportunities?: Opportunities[];
  tmpStatus: [{
    opportunities: Opportunities;
    status: boolean;
  }] = [{
    opportunities:{},
    status : true
  }];

  constructor(private opportunitiesService: OpportunitiesService , private router : Router) {}

  ngOnInit(): void {
    console.log();
    this.getOpportunities();
  }

  getOpportunities() {
    console.log();
    this.opportunitiesService.getOpportunities().subscribe(
      (data) => {
        this.opportunities = data;
        this.tempOpportunities = data;
        this.update();
      },
      (error) => console.log('error')
    );
  }

  onClick(id : any){
    console.log(id);
    this.router.navigate(['/id/',id])
  }

  

  update() {
    console.log();
    this.opportunities = this.tempOpportunities;
    let temp1 : Opportunities
    if (this.typed == '') {
      this.updateTmpStatus();
      return;
    }
    let filter: any = this.typed.trim().toUpperCase().split(" ");
    for(let k=0 ; k<filter.length ; k++){
      if(filter[k]=="") continue;
      let temp = [];
      if (this.opportunities) {
        for (let i = 0; i < this.opportunities.length; i++) {
          let txt;
          let o = this.opportunities[i];
          if (this.selected == 'vacancy') txt = o.vacancy?.toString();
          else if (this.selected == 'title') {
            txt = o.title;
          } else if (this.selected == 'mname') {
            txt = o.mname;
          } else if (this.selected == 'memail') {
            txt = o.memail;
          } else if (this.selected == 'skills') {
            txt = o.skills;
          } else if (this.selected == 'description') {
            txt = o.description;
          } else if (this.selected == 'location') {
            txt = o.location;
          } else if (this.selected == 'all') {
            txt =
              o.title +
              ' ' +
              o.mname +
              ' ' +
              o.memail +
              ' ' +
              o.description +
              ' ' +
              o.location +
              ' ' +
              o.description +
              ' ' +
              o.skills +
            ' ' + o.vacancy?.toString();
          }
          if (txt) {
            txt = txt.toUpperCase();
            if (txt.indexOf(filter[k]) > -1) {
              temp.push(this.opportunities[i]);
            }
          }
        }
        this.opportunities = temp;
      } 
    }
    
    this.updateTmpStatus();
  }

  updateTmpStatus(){
    console.log();
    this.tmpStatus=[{
      opportunities:{},
      status : true
    }];
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
    }
  }

  onKeyUp(e: any) {
    console.log();
    let filter = e.target.value;
    this.typed = filter;
    this.update();
  }

  onChange(e: any) {
    console.log();
    this.selected = e;
    this.typed = '';
    this.update();
  }
}
 