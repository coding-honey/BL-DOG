/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CreateDonationService } from './CreateDonation.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-createdonation',
  templateUrl: './CreateDonation.component.html',
  styleUrls: ['./CreateDonation.component.css'],
  providers: [CreateDonationService]
})
export class CreateDonationComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  donationId = new FormControl('', Validators.required);
  donatorType = new FormControl('', Validators.required);
  donatorName = new FormControl('', Validators.required);
  donateAmount = new FormControl('', Validators.required);
  shelter = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);
  phoneNum = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);


  constructor(private serviceCreateDonation: CreateDonationService, fb: FormBuilder) {
    this.myForm = fb.group({
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

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceCreateDonation.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
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

  addTransaction(form: any): Promise<any> {
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
      'transactionId': this.transactionId.value,
      'timestamp': this.timestamp.value
    };

    this.myForm.setValue({
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

    return this.serviceCreateDonation.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
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

  updateTransaction(form: any): Promise<any> {
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
      'timestamp': this.timestamp.value
    };

    return this.serviceCreateDonation.updateTransaction(form.get('transactionId').value, this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
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

  deleteTransaction(): Promise<any> {

    return this.serviceCreateDonation.deleteTransaction(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
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

  setId(id: any): void {
    this.currentId = id;
  }

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

      this.myForm.setValue(formObject);

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

  resetForm(): void {
    this.myForm.setValue({
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
  }
}
