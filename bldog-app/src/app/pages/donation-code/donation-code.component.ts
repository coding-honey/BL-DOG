import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateDonationService } from '../../CreateDonation/CreateDonation.service';
import { FormGroup, FormControl ,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-donation-code',
  templateUrl: './donation-code.component.html',
  styleUrls: ['./donation-code.component.css'],
  providers: [CreateDonationService]
})
export class DonationCodeComponent implements OnInit, OnDestroy {



  private allTransactions;
  private errorMessage;


  donationCodeForm : FormGroup;
  donationId = new FormControl({value:'',disabled:true}, Validators.required);
  shelter =  new FormControl({value:'',disabled:true}, Validators.required);

  donationIdString:string;
  shelterString:string;




  constructor(private serviceCreateDonation: CreateDonationService, 
              private route:ActivatedRoute, 
              fb: FormBuilder,
              private router: Router) { 
              
        this.donationCodeForm = fb.group({
          donationId : this.donationId,
          shelter : this.shelter
        });

    }


  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
    body.classList.add('off-canvas-sidebar');

    console.log("code-research page is opened");

    //얘네 안됨
    // this.donationIdString = this.route.snapshot.paramMap.get("donationId");
    // this.shelterString = this.route.snapshot.paramMap.get("shelter");

    //얘네 안됨
    // this.route.paramMap.subscribe (params => { 
    //   this.donationIdString = params.get("donationId");
    //   this.shelterString = params.get("shelter");
    // }) 

     this.route.queryParams.subscribe(params=>{
        this.donationIdString = params['donationId'];
        this.shelterString = params['shelter'];
    })

    console.log(" this is params : "+this.donationIdString+ " & "+this.shelterString);
    this.setDonationForm(); //넘어온 파라미터로 폼셋팅

  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
    body.classList.remove('off-canvas-sidebar');
  }



  setDonationForm(){
    this.donationId.setValue(this.donationIdString);
    this.shelter.setValue(this.shelterString);
  }


  getDonationDetails(){
    //기부금코드로 해당 트랜잭션 조회 donateId : string
    // shelterId로 해당 donation 들 조회
    
  }


  //기부금코드(id)에 해당하는 트랜잭션 가져오기
  //폼으로 보여줄것인가 테이블레코드 한줄로 보여줄것인가. (폼을 한줄로 짠다면...?)
  getForm(id: any): Promise<any> {

    return this.serviceCreateDonation.getTransaction(id)
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
        'email': null,
        'transactionId': null,
        'timestamp': null
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

      if (result.transactionId) {
        formObject.transactionId = result.transactionId;
      } else {
        formObject.transactionId = null;
      }

      if (result.timestamp) {
        formObject.timestamp = result.timestamp;
      } else {
        formObject.timestamp = null;
      }

      //this.myForm.setValue(formObject);

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

  //shelterID로 해당 donation들 조회


}
