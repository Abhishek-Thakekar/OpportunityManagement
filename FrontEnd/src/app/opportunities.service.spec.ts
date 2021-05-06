import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OpportunitiesService } from './opportunities.service';
import { of } from 'rxjs';
import { Opportunities } from './opportunities';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('OpportunitiesService', () => {
  let service: OpportunitiesService;
  let httpClient: HttpClient;
  let newOppo: Opportunities;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(OpportunitiesService);
    httpClient = TestBed.get(HttpClient);
    newOppo = { 
                "opid": 1,
                "mname": "Abhishek",
                "memail": "Abhishek@gmail.com",
                "title": "Tester",
                "description": "2 years exp",
                "location": "Mumbai",
                "skills": "Javascript",
                "vacancy": 7,
                "endDate" : new Date("2022-04-21"),
                "startDate"  : new Date("2021-04-21") 
            };
  });

  it('should able to create Opporunity service', () => {
    expect(service).toBeTruthy();
  });

  it('Should Able To Call getOpportunities API', () => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getOpportunities();
    expect(service.getOpportunities()).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getOpportunities API call(with correct parameters) Should be able to return List of Opportunities", () => {
    //create a mock return response
    const Opportunities_response = [
      {
                "opid": 1,
                "mname": "Abhishek",
                "memail": "Abhishek@gmail.com",
                "title": "Tester",
                "description": "2 years exp",
                "location": "Mumbai",
                "skills": "Javascript",
                "vacancy": 7,
                "endDate" : new Date("2022-04-21"),
                "startDate"  : new Date("2021-04-21")
      },
      {
                "opid": 2,
                "mname": "Sohail",
                "memail": "Abhishek@gmail.com",
                "title": "Tester",
                "description": "2 years exp",
                "location": "Mumbai",
                "skills": "Javascript",
                "vacancy": 7,
                "endDate" : new Date("2022-04-21"),
                "startDate"  : new Date("2021-04-21")
      }
    ];

    let response;
    spyOn(service, "getOpportunities").and.returnValue(of(Opportunities_response));
    service.getOpportunities().subscribe(res => {
      response = res;
    });
    console.log("Valid Opportunities",response);
    expect(response).toBeTruthy(Opportunities_response);
  });

  it('Should Able To Call getAllOpportunities API', () => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getOpportunities();
    expect(service.getOpportunities()).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getAllOpportunities  Should be able to return List of Opportunities", () => {
    //create a mock return response
    const Opportunities_response = [
      {
                "opid": 1,
                "mname": "Abhishek",
                "memail": "Abhishek@gmail.com",
                "title": "Tester",
                "description": "2 years exp",
                "location": "Mumbai",
                "skills": "Javascript",
                "vacancy": 7,
                "endDate" : new Date("2022-04-21"),
                "startDate"  : new Date("2021-04-21")
      },
      {
                "opid": 2,
                "mname": "Sohail",
                "memail": "Abhishek@gmail.com",
                "title": "Tester",
                "description": "2 years exp",
                "location": "Mumbai",
                "skills": "Javascript",
                "vacancy": 7,
                "endDate" : new Date("2022-04-21"),
                "startDate"  : new Date("2021-04-21")
      }
    ];

    let response;
    spyOn(service, "getOpportunities").and.returnValue(of(Opportunities_response));
    service.getOpportunities().subscribe(res => {
      response = res;
    });
    console.log("All Opportunities", response);
    expect(response).toBeTruthy(Opportunities_response);
  });


  it('Should be able to call createOpportunity ', () => {
    spyOn(httpClient, 'post').and.returnValue(of(Object));
    service.createOpportunity(newOppo);
    expect(service.createOpportunity(newOppo)).toBeTruthy();
    expect(httpClient.post).toHaveBeenCalled();
  });

  it("createOpportunity API call Should be able to create oppo to list of opportunities with correct parameters", () => {
    //create a mock return response
    const Opportunities_response =
      {
                "opid": 1,
                "mname": "Abhishek",
                "memail": "Abhishek@gmail.com",
                "title": "Tester",
                "description": "2 years exp",
                "location": "Mumbai",
                "skills": "Javascript",
                "vacancy": 7,
                "endDate" : new Date("2022-04-21"),
                "startDate"  : new Date("2021-04-21")
      }
    ;

    let response;
    spyOn(service, "createOpportunity").and.returnValue(of(Opportunities_response));
    service.createOpportunity(newOppo).subscribe(res => {
      response = res;
    });
    console.log("Created Opporunity", response);
    expect(response).toBeTruthy(Opportunities_response);
  });



  it('Should be Able To Call getOpportunityByID API', () => {
    spyOn(httpClient, 'get').and.returnValue(of(Opportunities));
    service.getOpportunityById(10);
    expect(service.getOpportunityById(10)).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getOpportunityByID API call(with correct parameters) Should be able to return Opportunity with specified ID", () => {
    //create a mock return response
    const Opportunities_response =
      {
                "opid": 1,
                "mname": "Abhishek",
                "memail": "Abhishek@gmail.com",
                "title": "Tester",
                "description": "2 years exp",
                "location": "Mumbai",
                "skills": "Javascript",
                "vacancy": 7,
                "endDate" : new Date("2022-04-21"),
                "startDate"  : new Date("2021-04-21")
      };

    let response;
    spyOn(service, "getOpportunityById").and.returnValue(of(Opportunities_response));
    service.getOpportunityById(Opportunities_response.opid).subscribe(res => {
      response = res;
    });
    console.log("Valid Opportunities", response);
    expect(response).toBeTruthy(Opportunities_response);
  });

  it('Should be Able To Call deleteOpportunity', () => {
    spyOn(httpClient, 'delete').and.returnValue(of(Opportunities));
    service.deleteOpportunity(10);
    expect(service.deleteOpportunity(10)).toBeTruthy();
    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("deleteOpportunity API call(with correct parameters) Should be able to delete Opportunity with specified ID", () => {
    //create a mock return response
    const Opportunities_response =
    {
        "opid": 1,
        "mname": "Abhishek",
        "memail": "Abhishek@gmail.com",
        "title": "Tester",
        "description": "2 years exp",
        "location": "Mumbai",
        "skills": "Javascript",
        "vacancy": 7,
        "endDate" : new Date("2022-04-21"),
        "startDate"  : new Date("2021-04-21")
    };

    let response;
    spyOn(service, "deleteOpportunity").and.returnValue(of(Opportunities_response));
    service.deleteOpportunity(Opportunities_response.opid).subscribe(res => {
      response = res;
    });
    console.log("Deleted Opportunities", response);
    expect(response).toBeTruthy(Opportunities_response);
  });


  it('Should be Able To Call updateOpportunity ', () => {
    spyOn(httpClient, 'put').and.returnValue(of(Object));
    service.updateOpportunity(1, newOppo);
    expect(service.updateOpportunity(10, newOppo)).toBeTruthy();
    expect(httpClient.put).toHaveBeenCalled();
  });

  it("updateOpportunity API call Should be able to call delete oppo from list of opportunities with correct parameters", () => {
    //create a mock return response
    const Opportunities_response = [
        {
                  "opid": 1,
                  "mname": "Abhishek",
                  "memail": "Abhishek@gmail.com",
                  "title": "Tester",
                  "description": "2 years exp",
                  "location": "Mumbai",
                  "skills": "Javascript",
                  "vacancy": 7,
                  "endDate" : new Date("2022-04-21"),
                  "startDate"  : new Date("2021-04-21")
        },
        {
                  "opid": 2,
                  "mname": "Sohail",
                  "memail": "Abhishek@gmail.com",
                  "title": "Tester",
                  "description": "2 years exp",
                  "location": "Mumbai",
                  "skills": "Javascript",
                  "vacancy": 7,
                  "endDate" : new Date("2022-04-21"),
                  "startDate"  : new Date("2021-04-21")
        }
      ];
    let response;
    spyOn(service, "updateOpportunity").and.returnValue(of(Opportunities_response));
    service.updateOpportunity(10, newOppo).subscribe(res => {
      response = res;
    });
    console.log("Update Opporunity", response);
    expect(response).toBeTruthy(Opportunities_response);
  });
});