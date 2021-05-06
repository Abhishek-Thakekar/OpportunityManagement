import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AnalysisComponent } from './analysis.component';

describe('AnalysisComponent', () => {
  let component: AnalysisComponent;
  let fixture: ComponentFixture<AnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should able to call titleVacancy function', () => {
    console.log = jasmine.createSpy("log")
    component.titleVacancy();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to call tlv function', () => {
    console.log = jasmine.createSpy("log")
    component.tlv();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to call locationVacancy function', () => {
    console.log = jasmine.createSpy("log")
    component.locationVacancy();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to call skillsVacancy function', () => {
    console.log = jasmine.createSpy("log")
    component.skillsVacancy();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to call yearsise function', () => {
    console.log = jasmine.createSpy("log")
    component.yearwise();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to init ', () => {
    console.log = jasmine.createSpy("log")
    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  })

});
