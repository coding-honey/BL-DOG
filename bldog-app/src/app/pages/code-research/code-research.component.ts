import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CodeResearchService } from './code-research.service';

@Component({
  selector: 'app-code-research',
  templateUrl: './code-research.component.html',
  styleUrls: ['./code-research.component.css'],
  providers: [CodeResearchService]
})
export class CodeResearchComponent implements OnInit {



  //검색할 폼
  donationCodeResearchForm : FormGroup;
  donationFormId = new FormControl('', Validators.required);

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;



  private allTransactions;
  donationForm : FormGroup;


  //검색결과 출력 폼 8 + 2개 
  donationId = new FormControl('', Validators.required);
  donatorType = new FormControl('', Validators.required);
  donatorName = new FormControl('', Validators.required);
  donateAmount = new FormControl('', Validators.required);
  shelter = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);
  phoneNum = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);

  constructor(public serviceDonationForm: CodeResearchService,
    private route: ActivatedRoute,
    fb: FormBuilder,
    private router: Router) {

    this.donationForm = fb.group({
      donationId: this.donationId,
      donatorType: this.donatorType,
      donatorName: this.donatorName,
      donateAmount: this.donateAmount,
      shelter: this.shelter,
      date: this.date,
      phoneNum: this.phoneNum,
      email: this.email
    });

    this.donationCodeResearchForm = fb.group({
      donationFormId : this.donationFormId
    })

  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    body.classList.add('off-canvas-sidebar');
  }

  //donationId로 기부서 조회하고 폼에 찍기. 
  //shelter로 그 쉘터에 들어온 기부금목록들 확인하기
  getDonationDetails() {
    console.log("donationID IS : " + this.donationFormId.value);
    this.getForm(this.donationFormId.value);


  }

  //기부서 id에 따른 단일정보
  getForm(id: any): Promise<any> {

    return this.serviceDonationForm.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'donationId': null,
        'donatorType': null,
        'donatorName': null,
        'donateAmount': null,
        'shelter': null,
        'date': null,
        'phoneNum': null,
        'email': null
      };

      if (result.donationId) {
        formObject.donationId = result.donationId;
      } else {
        formObject.donationId = null;
      }

      if (result.donatorType) {
        formObject.donatorType = result.donatorType;
      } else {
        formObject.donatorType = null;
      }

      if (result.donatorName) {
        formObject.donatorName = result.donatorName;
      } else {
        formObject.donatorName = null;
      }

      if (result.donateAmount) {
        formObject.donateAmount = result.donateAmount;
      } else {
        formObject.donateAmount = null;
      }

      if (result.shelter) {
        formObject.shelter = result.shelter;
        //여기서 shelterID로 해당 보호소의 기부들 출력.
        this.getDonationByShelter(result.shelter.toString());

      } else {
        formObject.shelter = null;
      }

      if (result.date) {
        formObject.date = result.date;
      } else {
        formObject.date = null;
      }

      if (result.phoneNum) {
        formObject.phoneNum = result.phoneNum;
      } else {
        formObject.phoneNum = null;
      }

      if (result.email) {
        formObject.email = result.email;
      } else {
        formObject.email = null;
      }

      this.donationForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }



  getDonationByShelter(shelter: string){
    console.log("결과로 받은 쉘터 : "+shelter);
    var splitId = shelter.split("#");
    console.log("잘린 shelterid : "+splitId[1]);



    //해당 shelterID로 기부목록들 가져오기. 
    const tempList = [];
    return this.serviceDonationForm.getDonationByShelter(splitId[1]) 
    .toPromise()
    .then((result) => {
      console.log(result);
      
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
    
  }


}
