import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  // uri = 'http://localhost:8080/shelterInformation';
  
  uri = 'http://15.164.6.132:8080/shelterInformation';
  

  constructor(private http: HttpClient) { }

  shelterId = "AAA";

// 전체 보호소의 정보 가져오기
//   addInformation(shelterId, address, specified_date, open_time_weekday, close_time_weekday, vet_number,  staff_number, clinic_room, breeding_room, max_animal_number) {
//     const obj = {
//       shelterId: shelterId,
//       address: address,
//       specified_date: specified_date,
//       open_time_weekday: open_time_weekday,
//       close_time_weekday: close_time_weekday,
//       vet_number: vet_number,
//       staff_number: staff_number,
//       clinic_room: clinic_room,
//       breeding_room: breeding_room,
//       max_animal_number: max_animal_number
//     };
//     console.log(obj);
//     this.http.post(`${this.uri}/add`, obj)
//         .subscribe(res => console.log('Done'));
//   }

//한 보호소의 정보 가져오기. 보호소정보 primary key는 shelterId를 사용.
  getInformation(){
    return this
            .http
            .get(`${this.uri}/${this.shelterId}`);
  }


   

   
 //shelterId로 조회해서 나머지 요소들 업뎃시키기
 //매개변수 9개
 updateInformation(address, specified_date, open_time_weekday, 
    close_time_weekday, vet_number,  staff_number,
     clinic_room, breeding_room, max_animal_number) {
  const obj = {
      shelterId: this.shelterId,
      address: address,
      specified_date: specified_date,
      open_time_weekday: open_time_weekday,
      close_time_weekday: close_time_weekday,
      vet_number: vet_number,
      staff_number: staff_number,
      clinic_room: clinic_room,
      breeding_room: breeding_room,
      max_animal_number: max_animal_number
    };
   this
     .http
     .put(`${this.uri}/${this.shelterId}`, obj)
     .subscribe(res => console.log('Done'));
 }
 
 
 
 
 
}