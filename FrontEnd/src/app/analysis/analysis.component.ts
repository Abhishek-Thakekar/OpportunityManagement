import { Component, OnInit } from '@angular/core';
import { Opportunities } from '../opportunities';
import { OpportunitiesService } from '../opportunities.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent implements OnInit {
  constructor(private opportunitiesService: OpportunitiesService) {}

  opportunities: Opportunities[] = [];
  ngOnInit(): void {
    this.opportunitiesService.getOpportunities().subscribe(
      (data) => {
        this.opportunities = data;
        this.titleVacancy();
        this.locationVacancy();
        this.skillsVacancy();
        this.tlv();
      },
      (error) => console.log(error)
    );
    console.log(this.tvData);
    // this.tvData = this.saleData;
  }

  public tvData: any[] = [];
  public lvData: any[] = [];
  public svData: any[] = [];
  public tlvData : any[] = [];

  titleVacancy(): void {
    let obj = new Map();
    for (let i = 0; i < this.opportunities.length; i++) {
      let t: any = 0;
      let st = this.opportunities[i].title?.toUpperCase();
      if (obj.get(st)) {
        t = obj.get(st);
      }
      if (this.opportunities[i].vacancy) t = t + this.opportunities[i].vacancy;
      obj.set(st, t);
    }
    for (let [k, v] of obj) {
      let tmp = {
        name: k,
        value: v,
      };
      this.tvData.push(tmp);
    }
    obj.clear();
  }

// title vs location vs vacancy
  tlv(){
    let obj = new Map();
    for(let i=0;i<this.opportunities.length;i++){
      let location = this.opportunities[i].location?.split(",");
      if (location) {
        for (let j = 0; j < location.length; j++) {
          location[j]= location[j].trim().toUpperCase();
          let series = new Map();
          if(obj.get(location[j])){
            series = obj.get(location[j]);
            let value = this.opportunities[i].vacancy;
            for (let [k, v] of series) {
              if(k==this.opportunities[i].title?.trim().toUpperCase()){
                value= v+value ;
              }
            }
            series.set(this.opportunities[i].title?.trim().toUpperCase(),value);
          }
          else{
            series.set(this.opportunities[i].title?.trim().toUpperCase() ,this.opportunities[i].vacancy );
          } 
          obj.set(location[j] , series);

        }
      }
    }
    // console.log("obj ",obj);

    for(let [k,v] of obj){
      let series = [];
      for(let [k1,v1] of v){
        let t = {
          name : k1,
          value : v1
        }
        series.push(t);
      }
      let tmp = {
        name : k,
        series : series
      }
      this.tlvData.push(tmp);
    }
    obj.clear();
    console.log("tlv" , this.tlvData);
  }

  locationVacancy(): void {
    let obj = new Map();
    for (let i = 0; i < this.opportunities.length; i++) {
      let t: any = 0;
      let st = this.opportunities[i].location?.toUpperCase();
      if (obj.get(st)) {
        t = obj.get(st);
      }
      if (this.opportunities[i].vacancy) t = t + this.opportunities[i].vacancy;
      obj.set(st, t);
    }
    for (let [k, v] of obj) {
      let tmp = {
        name: k,
        value: v,
      };
      this.lvData.push(tmp);
    }
    obj.clear();
    // console.log(this.lvData);
  }

  skillsVacancy(): void {
    let obj = new Map();
    for (let i = 0; i < this.opportunities.length; i++) {
      let lst :any = [];
      lst = this.opportunities[i].skills?.split(",");
      if (lst) {
        for (let i = 0; i < lst.length; i++) {
          lst[i]= lst[i].trim().toUpperCase();
          let t: any = 0;
          if (obj.get(lst[i])) t = obj.get(lst[i]);
          if (this.opportunities[i].vacancy)
            t = t + this.opportunities[i].vacancy;
          obj.set(lst[i], t);
        }
      }
    }

    for (let [k , v] of obj) {
      let tmp = {
        name: k,
        value: v,
      };
      this.svData.push(tmp);
    }
    obj.clear();
    // console.log(this.svData);
  }

  

  // options for the chart
  view: any = [600, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  timeline = true;
  showLabels = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };
}
