import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should able call onSubmit function ', () => {
    console.log = jasmine.createSpy("log")
    component.onSubmit();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able call onCancel function ', () => {
    console.log = jasmine.createSpy("log")
    component.onCancel();
    expect(console.log).toHaveBeenCalled();
  })

  it('should able call saveOpportunity function ', () => {
    console.log = jasmine.createSpy("log")
    component.saveOpportunity();
    expect(console.log).toHaveBeenCalled();
  })
  it('should able to init ', () => {
    console.log = jasmine.createSpy("log")
    component.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  })
});
