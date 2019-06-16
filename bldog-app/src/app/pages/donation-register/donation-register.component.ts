import { Component, OnInit , OnDestroy} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateDonationService } from '../../CreateDonation/CreateDonation.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-donation-register',
  templateUrl: './donation-register.component.html',
  styleUrls: ['./donation-register.component.css'],
  providers: [CreateDonationService]
})
export class DonationRegisterComponent implements OnInit, OnDestroy  {

  donationForm : FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  donationId = new FormControl('', Validators.required); //
  donatorType = new FormControl('', Validators.required);//
  donatorName = new FormControl('', Validators.required);//
  donateAmount = new FormControl('', Validators.required);//
  shelter = new FormControl('', Validators.required); //
  date = new FormControl('', Validators.required); //
  phoneNum = new FormControl('', Validators.required); //
  email = new FormControl('', Validators.required);//
  transactionId = new FormControl('', Validators.required); ///이건모지
  timestamp = new FormControl('', Validators.required);       //이건모지

  


  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
    body.classList.add('off-canvas-sidebar');


   
  }
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
    body.classList.remove('off-canvas-sidebar');
  }

  constructor(private serviceCreateDonation: CreateDonationService, fb: FormBuilder,private router: Router) {
    this.donationForm = fb.group({
      donationId: this.donationId,
      donatorType: this.donatorType,
      donatorName: this.donatorName,
      donateAmount: this.donateAmount,
      shelter: this.shelter,
      date: this.date,
      phoneNum: this.phoneNum,
      email: this.email,
      transactionId: this.transactionId,
      timestamp: this.timestamp
    });
  };

  	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the transaction field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }


  //create Donation   
  //routerLink="/pages/login"


  addTransaction(form: any): Promise<any> {
    //console.log("submit버튼");

    
    

    this.Transaction = {
      $class: 'org.example.mynetwork.CreateDonation',
      'donationId': this.donationId.value,
      'donatorType': this.donatorType.value,
      'donatorName': this.donatorName.value,
      'donateAmount': this.donateAmount.value,
      'shelter': this.shelter.value,
      'date': this.date.value,
      'phoneNum': this.phoneNum.value,
      'email': this.email.value,
      'transactionId': null,
      'timestamp': null
    };

    // this.donationForm.setValue({
    //   'donationId': null,
    //   'donatorType': null,
    //   'donatorName': null,
    //   'donateAmount': null,
    //   'shelter': null,
    //   'date': null,
    //   'phoneNum': null,
    //   'email': null,
    //   'transactionId': null,
    //   'timestamp': null
    // });

    return this.serviceCreateDonation.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.navigateToDonationCodePage();
      this.errorMessage = null;
      this.donationForm.setValue({
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
      });
      

      
      
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }



  //폼 객체가 넘어와서 블록체인 rest로 기부서가 만들어진다.
  //만들고 나서 기부서 코드를 return받으므로 그것을 modal에 텍스트로 보여준다.
  sendDonationForm(){ 
    console.log(" sendDonationForm 버튼이 눌렸따능");
  }



  
  navigateToDonationCodePage(){
    console.log("donation create 하고 이 함수 불렷다능 곧 페이지 이동!");
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/pages/donation-code'], {queryParams: {donationId:this.donationId.value,
                                                 shelter: this.shelter.value} }
      )
    );
  }

}
