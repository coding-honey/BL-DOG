import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//앱의 모든 구성 요소에 싱글턴 전역 서비스를 주입할 수 있도록 한다.
@Injectable({
    providedIn: 'root'
  })

export class EnvironmentService {

    shelterId: string;


    //생성자
    constructor(){
        this.shelterId = null;
    }

    setShelterId(loginId:string){
        this.shelterId = loginId;
    }
    
}