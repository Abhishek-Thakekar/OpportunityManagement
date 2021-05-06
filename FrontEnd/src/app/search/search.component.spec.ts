import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should able call getOpportunities ', () => {
    console.log = jasmine.createSpy("log")
    component.getOpportunities();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able call onclick function ', () => {
    console.log = jasmine.createSpy("log")
    component.onClick(1);
    expect(console.log).toHaveBeenCalled();
  })

  it('should able call update function ', () => {
    console.log = jasmine.createSpy("log")
    component.update();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able call updateTmpStatus function ', () => {
    console.log = jasmine.createSpy("log")
    component.updateTmpStatus();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able call onKeyUp function ', () => {
    console.log = jasmine.createSpy("log")
    component.onKeyUp(1);
    expect(console.log).toHaveBeenCalled();
  })

  it('should able call onChange function ', () => {
    console.log = jasmine.createSpy("log")
    component.onChange(1);
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to init ', () => {
    console.log = jasmine.createSpy("log")
    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  })

});
