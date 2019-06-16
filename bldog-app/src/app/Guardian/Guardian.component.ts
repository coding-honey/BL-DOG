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
import { GuardianService } from './Guardian.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-guardian',
  templateUrl: './Guardian.component.html',
  styleUrls: ['./Guardian.component.css'],
  providers: [GuardianService]
})
export class GuardianComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  guardianCode = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  division = new FormControl('', Validators.required);
  protectDate = new FormControl('', Validators.required);
  phoneNum = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);

  constructor(public serviceGuardian: GuardianService, fb: FormBuilder) {
    this.myForm = fb.group({
      guardianCode: this.guardianCode,
      name: this.name,
      division: this.division,
      protectDate: this.protectDate,
      phoneNum: this.phoneNum,
      address: this.address
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceGuardian.getAll()
    .toPromise()
    .then((result) => {
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

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
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
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.example.mynetwork.Guardian',
      'guardianCode': this.guardianCode.value,
      'name': this.name.value,
      'division': this.division.value,
      'protectDate': this.protectDate.value,
      'phoneNum': this.phoneNum.value,
      'address': this.address.value
    };

    this.myForm.setValue({
      'guardianCode': null,
      'name': null,
      'division': null,
      'protectDate': null,
      'phoneNum': null,
      'address': null
    });

    return this.serviceGuardian.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'guardianCode': null,
        'name': null,
        'division': null,
        'protectDate': null,
        'phoneNum': null,
        'address': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.example.mynetwork.Guardian',
      'name': this.name.value,
      'division': this.division.value,
      'protectDate': this.protectDate.value,
      'phoneNum': this.phoneNum.value,
      'address': this.address.value
    };

    return this.serviceGuardian.updateAsset(form.get('guardianCode').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
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


  deleteAsset(): Promise<any> {

    return this.serviceGuardian.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
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

    return this.serviceGuardian.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'guardianCode': null,
        'name': null,
        'division': null,
        'protectDate': null,
        'phoneNum': null,
        'address': null
      };

      if (result.guardianCode) {
        formObject.guardianCode = result.guardianCode;
      } else {
        formObject.guardianCode = null;
      }

      if (result.name) {
        formObject.name = result.name;
      } else {
        formObject.name = null;
      }

      if (result.division) {
        formObject.division = result.division;
      } else {
        formObject.division = null;
      }

      if (result.protectDate) {
        formObject.protectDate = result.protectDate;
      } else {
        formObject.protectDate = null;
      }

      if (result.phoneNum) {
        formObject.phoneNum = result.phoneNum;
      } else {
        formObject.phoneNum = null;
      }

      if (result.address) {
        formObject.address = result.address;
      } else {
        formObject.address = null;
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
      'guardianCode': null,
      'name': null,
      'division': null,
      'protectDate': null,
      'phoneNum': null,
      'address': null
      });
  }

}
