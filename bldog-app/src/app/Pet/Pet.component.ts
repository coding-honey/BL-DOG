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
import { PetService } from './Pet.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-pet',
  templateUrl: './Pet.component.html',
  styleUrls: ['./Pet.component.css'],
  providers: [PetService]
})
export class PetComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  petSerial = new FormControl('', Validators.required);
  organicDate = new FormControl('', Validators.required);
  kind = new FormControl('', Validators.required);
  discoveryAddress = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);
  healthStatus = new FormControl('', Validators.required);
  disease = new FormControl('', Validators.required);
  protectStatus = new FormControl('', Validators.required);
  animalSpecies = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  furColor = new FormControl('', Validators.required);
  endProtection = new FormControl('', Validators.required);
  guardian = new FormControl('', Validators.required);
  nshelter = new FormControl('', Validators.required);

  constructor(public servicePet: PetService, fb: FormBuilder) {
    this.myForm = fb.group({
      petSerial: this.petSerial,
      organicDate: this.organicDate,
      kind: this.kind,
      discoveryAddress: this.discoveryAddress,
      name: this.name,
      age: this.age,
      gender: this.gender,
      weight: this.weight,
      healthStatus: this.healthStatus,
      disease: this.disease,
      protectStatus: this.protectStatus,
      animalSpecies: this.animalSpecies,
      description: this.description,
      furColor: this.furColor,
      endProtection: this.endProtection,
      guardian: this.guardian,
      nshelter: this.nshelter
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.servicePet.getAll()
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
      $class: 'org.example.mynetwork.Pet',
      'petSerial': this.petSerial.value,
      'organicDate': this.organicDate.value,
      'kind': this.kind.value,
      'discoveryAddress': this.discoveryAddress.value,
      'name': this.name.value,
      'age': this.age.value,
      'gender': this.gender.value,
      'weight': this.weight.value,
      'healthStatus': this.healthStatus.value,
      'disease': this.disease.value,
      'protectStatus': this.protectStatus.value,
      'animalSpecies': this.animalSpecies.value,
      'description': this.description.value,
      'furColor': this.furColor.value,
      'endProtection': this.endProtection.value,
      'guardian': this.guardian.value,
      'nshelter': this.nshelter.value
    };

    this.myForm.setValue({
      'petSerial': null,
      'organicDate': null,
      'kind': null,
      'discoveryAddress': null,
      'name': null,
      'age': null,
      'gender': null,
      'weight': null,
      'healthStatus': null,
      'disease': null,
      'protectStatus': null,
      'animalSpecies': null,
      'description': null,
      'furColor': null,
      'endProtection': null,
      'guardian': null,
      'nshelter': null
    });

    return this.servicePet.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'petSerial': null,
        'organicDate': null,
        'kind': null,
        'discoveryAddress': null,
        'name': null,
        'age': null,
        'gender': null,
        'weight': null,
        'healthStatus': null,
        'disease': null,
        'protectStatus': null,
        'animalSpecies': null,
        'description': null,
        'furColor': null,
        'endProtection': null,
        'guardian': null,
        'nshelter': null
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
      $class: 'org.example.mynetwork.Pet',
      'organicDate': this.organicDate.value,
      'kind': this.kind.value,
      'discoveryAddress': this.discoveryAddress.value,
      'name': this.name.value,
      'age': this.age.value,
      'gender': this.gender.value,
      'weight': this.weight.value,
      'healthStatus': this.healthStatus.value,
      'disease': this.disease.value,
      'protectStatus': this.protectStatus.value,
      'animalSpecies': this.animalSpecies.value,
      'description': this.description.value,
      'furColor': this.furColor.value,
      'endProtection': this.endProtection.value,
      'guardian': this.guardian.value,
      'nshelter': this.nshelter.value
    };

    return this.servicePet.updateAsset(form.get('petSerial').value, this.asset)
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

    return this.servicePet.deleteAsset(this.currentId)
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

    return this.servicePet.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'petSerial': null,
        'organicDate': null,
        'kind': null,
        'discoveryAddress': null,
        'name': null,
        'age': null,
        'gender': null,
        'weight': null,
        'healthStatus': null,
        'disease': null,
        'protectStatus': null,
        'animalSpecies': null,
        'description': null,
        'furColor': null,
        'endProtection': null,
        'guardian': null,
        'nshelter': null
      };

      if (result.petSerial) {
        formObject.petSerial = result.petSerial;
      } else {
        formObject.petSerial = null;
      }

      if (result.organicDate) {
        formObject.organicDate = result.organicDate;
      } else {
        formObject.organicDate = null;
      }

      if (result.kind) {
        formObject.kind = result.kind;
      } else {
        formObject.kind = null;
      }

      if (result.discoveryAddress) {
        formObject.discoveryAddress = result.discoveryAddress;
      } else {
        formObject.discoveryAddress = null;
      }

      if (result.name) {
        formObject.name = result.name;
      } else {
        formObject.name = null;
      }

      if (result.age) {
        formObject.age = result.age;
      } else {
        formObject.age = null;
      }

      if (result.gender) {
        formObject.gender = result.gender;
      } else {
        formObject.gender = null;
      }

      if (result.weight) {
        formObject.weight = result.weight;
      } else {
        formObject.weight = null;
      }

      if (result.healthStatus) {
        formObject.healthStatus = result.healthStatus;
      } else {
        formObject.healthStatus = null;
      }

      if (result.disease) {
        formObject.disease = result.disease;
      } else {
        formObject.disease = null;
      }

      if (result.protectStatus) {
        formObject.protectStatus = result.protectStatus;
      } else {
        formObject.protectStatus = null;
      }

      if (result.animalSpecies) {
        formObject.animalSpecies = result.animalSpecies;
      } else {
        formObject.animalSpecies = null;
      }

      if (result.description) {
        formObject.description = result.description;
      } else {
        formObject.description = null;
      }

      if (result.furColor) {
        formObject.furColor = result.furColor;
      } else {
        formObject.furColor = null;
      }

      if (result.endProtection) {
        formObject.endProtection = result.endProtection;
      } else {
        formObject.endProtection = null;
      }

      if (result.guardian) {
        formObject.guardian = result.guardian;
      } else {
        formObject.guardian = null;
      }

      if (result.nshelter) {
        formObject.nshelter = result.nshelter;
      } else {
        formObject.nshelter = null;
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
      'petSerial': null,
      'organicDate': null,
      'kind': null,
      'discoveryAddress': null,
      'name': null,
      'age': null,
      'gender': null,
      'weight': null,
      'healthStatus': null,
      'disease': null,
      'protectStatus': null,
      'animalSpecies': null,
      'description': null,
      'furColor': null,
      'endProtection': null,
      'guardian': null,
      'nshelter': null
      });
  }

}
