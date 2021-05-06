import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should able to init ', () => {
    console.log = jasmine.createSpy("log")
    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  })
  it('should able to get opportunityById ', () => {
    console.log = jasmine.createSpy("log")
    component.getOpportunity();
    expect(console.log).toHaveBeenCalled();
  })
});
