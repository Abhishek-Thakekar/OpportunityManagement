import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { OpportunityComponent } from './opportunity.component';
import { OpportunitiesService } from '../opportunities.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('OpportunityComponent', () => {
  let component: OpportunityComponent;
  let fixture: ComponentFixture<OpportunityComponent>;
  let router: Router;
  let service: OpportunitiesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should able to call getOpportunities', () => {
    spyOn(service, 'getOpportunities').and.returnValue(of());
    //spyOn(component, 'goToOpportunitiesList');
    component.getOpportunities();
    expect(service.getOpportunities).toHaveBeenCalled();
  })


  it('should able to call updateOpportunities', () => {
    
    console.log = jasmine.createSpy("log")
    component.onEdit(1);
    expect(console.log).toHaveBeenCalled();
    
  })

  it('should able to call deleteOpportunities', () => {
    console.log = jasmine.createSpy("log")
    component.onDelete(1);
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to view ', () => {
    console.log = jasmine.createSpy("log")
    component.onClick(1);
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to init ', () => {
    console.log = jasmine.createSpy("log")
    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  })
});
