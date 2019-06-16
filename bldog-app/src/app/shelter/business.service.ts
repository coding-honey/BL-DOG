import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  //uri = 'http://localhost:4000/shelter/employees/business';
  
 // uri = 'http://localhost:4000/business';

    // uri = 'http://localhost:8080/business';

    uri = 'http://15.164.6.132:8080/business';
    private headers: Headers;
  
  
  constructor(private http: HttpClient) { 
    // this.headers = new Headers();
    //     this.headers.append('Content-Type', 'application/json');
    //     this.headers.append('Accept', 'application/json');
  }

  //모든 보호소 정보 가져오기
 getBusinesses() {
  return this
         .http
         .get(`${this.uri}`);
  }

//한 직원 정보 가져오기 (함수이름 바꾸기. 한 직원정보 가져오므로)
editBusiness(id) {
  console.log("editBu의 매개변수 id :"+id);
  return this
          .http
          .get(`${this.uri}/${id}`);
  }



  //새 직원 정보 추가
  addBusiness(person_name, business_name, business_gst_duty, business_gst_number,business_gst_email, business_gst_date) {
    const obj = {
    person_name: person_name,
    business_name: business_name,
    business_gst_duty: business_gst_duty,
    business_gst_number: business_gst_number,
    business_gst_email: business_gst_email,
    //business_gst_address: business_gst_address,
    business_gst_date: business_gst_date
    };
    // console.log(obj);
    // this.http.post(`${this.uri}/add`, obj)
    //     .subscribe(res => console.log('Done'));
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));


  }


  // business.service.ts

updateBusiness(
  person_name, 
  business_name, 
  business_gst_duty, 
  business_gst_number, 
  business_gst_email, 
  business_gst_date, id) {
  console.log("update의 매개변수 id :"+id);
  const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_duty: business_gst_duty,
      business_gst_number: business_gst_number,
      business_gst_email: business_gst_email,
      //business_gst_address: business_gst_address,
      business_gst_date: business_gst_date
    };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

// business.service.ts

deleteBusiness(id) {
  return this
            .http
            .delete(`${this.uri}/delete/${id}`);
}

}