import { Component, AfterViewInit ,OnInit, Input  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AdoptedAnimalService } from './adoptedanimal.service';
import { GuardianService } from 'app/Guardian/Guardian.service';
import PerfectScrollbar from 'perfect-scrollbar';
// import * as $ from 'jquery';

declare const $: any;

@Component({
  selector: 'app-adoptedanimal',
  templateUrl: './adoptedanimal.component.html',
  styleUrls: ['./adoptedanimal.component.css'],
  providers:[AdoptedAnimalService, GuardianService ]

})
export class AdoptedanimalComponent implements OnInit, AfterViewInit {
  title = 'AnimalListComponent works!';

   //컴포넌트 뷰와 자식컴포넌트 뷰 초기화한 이후 호출된다.
   ngAfterViewInit() {

  
  }

  myForm: FormGroup;
  detailsForm: FormGroup;

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

  petSerial2 = new FormControl('', Validators.required);
  organicDate2 = new FormControl('', Validators.required);
  kind2 = new FormControl('', Validators.required);
  discoveryAddress2 = new FormControl('', Validators.required);
  name2 = new FormControl('', Validators.required);
  age2 = new FormControl('', Validators.required);
  gender2 = new FormControl('', Validators.required);
  weight2 = new FormControl('', Validators.required);
  healthStatus2 = new FormControl('', Validators.required);
  disease2 = new FormControl('', Validators.required);
  protectStatus2 = new FormControl('', Validators.required);
  animalSpecies2 = new FormControl('', Validators.required);
  description2 = new FormControl('', Validators.required);
  furColor2 = new FormControl('', Validators.required);
  endProtection2 = new FormControl('', Validators.required);
  guardian2 = new FormControl('', Validators.required);
  nshelter2 = new FormControl('', Validators.required);


  //Guardian
  guardianForm: FormGroup;

  private guardianAllAssets;
  private guardianAsset;
  private guardianCurrentId; //실제 가디언현재id가 아닐것임
  private guardianErrorMessage;

  guardianCode = new FormControl('', Validators.required);
  guardianName = new FormControl('', Validators.required);
  division = new FormControl('', Validators.required);
  protectDate = new FormControl('', Validators.required);
  phoneNum = new FormControl('', Validators.required);
  guardianAddress = new FormControl('', Validators.required);


  constructor(public servicePet: AdoptedAnimalService , fb: FormBuilder,public serviceGuardian: GuardianService, fb2: FormBuilder) {
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

    this.detailsForm = fb.group({
      petSerial2: this.petSerial2,
      organicDate2: this.organicDate2,
      kind2: this.kind2,
      discoveryAddress2: this.discoveryAddress2,
      name2: this.name2,
      age2: this.age2,
      gender2: this.gender2,
      weight2: this.weight2,
      healthStatus2: this.healthStatus2,
      disease2: this.disease2,
      protectStatus2: this.protectStatus2,
      animalSpecies2: this.animalSpecies2,
      description2: this.description2,
      furColor2: this.furColor2,
      endProtection2: this.endProtection2,
      guardian2: this.guardian2,
      nshelter2: this.nshelter2
    });


    this.guardianForm = fb2.group({
      guardianCode: this.guardianCode,
      guardianName: this.guardianName,
      division: this.division,
      protectDate: this.protectDate,
      phoneNum: this.phoneNum,
      guardianAddress: this.guardianAddress
    });

  };

  ngOnInit(): void {

    // this.initData();
    this.loadAll();
    const animalListDiv = <HTMLElement>document.querySelector('#animal-list-table');
    let animalListDivPs = new PerfectScrollbar(animalListDiv);
  }

  //초기데이터 생성하는 함수호출 
  initData(){

    this.getPrototypeData("004","19-01-01","poodle",
    "kyeonggido","kimkozi","14","boy","5kg",
    "good","nose","protect","dog"," ","brown"," ","AA","AAA");

    this.getPrototypeData("005","19-01-01","poodle",
    "kyeonggido","kimkozi","14","boy","5kg",
    "good","nose","protect","dog"," ","brown"," "," ","AAA");

    this.getPrototypeData("006","19-01-01","poodle",
    "kyeonggido","kimkozi","14","boy","5kg",
    "good","nose","protect","dog"," ","brown"," "," ","AAA");

   
    console.log("initData 동 작 중");
   
  }

  //초기데이터 생성하는 함수
  getPrototypeData(ps:string,od:string,k:string,da:string,
    n:string,a:string,g:string,w:string,hs:string,d:string,
    prs:string,as:string,de:string,fc:string,ep:string,gd:string,ns:string){
    this.asset = {
      $class: 'org.example.mynetwork.Pet',
      'petSerial': ps,
      'organicDate': od,
      'kind': k,
      'discoveryAddress': da,
      'name': n,
      'age': a,
      'gender': g,
      'weight': w,
      'healthStatus': hs,
      'disease': d,
      'protectStatus': prs,
      'animalSpecies': as,
      'description': de,
      'furColor': fc,
      'endProtection': ep,
      'guardian': gd,
      'nshelter': ns
    };
    return this.servicePet.addAsset(this.asset)
    .toPromise()
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.servicePet.getAllByStatusUnProtected("AAA") //getAll() //
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

  // READ animalDetails 읽을때 값 없으면 null로 출력됨
  getAnimalDetails(id:string): Promise<any> {
    // console.log(id);

    return this.servicePet.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'petSerial2': null,
        'organicDate2': null,
        'kind2': null,
        'discoveryAddress2': null,
        'name2': null,
        'age2': null,
        'gender2': null,
        'weight2': null,
        'healthStatus2': null,
        'disease2': null,
        'protectStatus2': null,
        'animalSpecies2' : null,
        'description2': null,
        'furColor2': null,
        'endProtection2': null,
        'guardian2': null,
        'nshelter2': null
      };
      if (result.petSerial) {
        formObject.petSerial2 = result.petSerial;
      } else {
        formObject.petSerial2 = null;
      }

      if (result.organicDate) {
        formObject.organicDate2 = result.organicDate;
      } else {
        formObject.organicDate2 = null;
      }

      if (result.kind) {
        formObject.kind2 = result.kind;
      } else {
        formObject.kind2 = null;
      }

      if (result.discoveryAddress) {
        formObject.discoveryAddress2 = result.discoveryAddress;
      } else {
        formObject.discoveryAddress2 = null;
      }

      if (result.name) {
        formObject.name2 = result.name;
      } else {
        formObject.name2 = null;
      }

      if (result.age) {
        formObject.age2 = result.age;
      } else {
        formObject.age2 = null;
      }

      if (result.gender) {
        formObject.gender2 = result.gender;
      } else {
        formObject.gender2 = null;
      }

      if (result.weight) {
        formObject.weight2 = result.weight;
      } else {
        formObject.weight2 = null;
      }

      if (result.healthStatus) {
        formObject.healthStatus2 = result.healthStatus;
      } else {
        formObject.healthStatus2 = null;
      }

      if (result.disease) {
        formObject.disease2 = result.disease;
      } else {
        formObject.disease2 = null;
      }

      if (result.protectStatus) {
        formObject.protectStatus2 = result.protectStatus;
      } else {
        formObject.protectStatus2 = null;
      }

      if (result.animalSpecies) {
        formObject.animalSpecies2 = result.animalSpecies;
      } else {    
        formObject.animalSpecies2 = null;
      }


      if (result.description) {
        formObject.description2 = result.description;
      } else {
        formObject.description2 = null;
      }

      if (result.furColor) {
        formObject.furColor2 = result.furColor;
      } else {
        formObject.furColor2 = null;
      }

      if (result.endProtection) {
        formObject.endProtection2 = result.endProtection;
      } else {
        formObject.endProtection2 = null;
      }

      if (result.guardian) {
        formObject.guardian2 = result.guardian;
        this.resetGuardianForm();
        this.getGuardian(result.guardian.toString());
        
      } else {
        formObject.guardian2= null;
        this.resetGuardianForm();
        this.getGuardian("AA");
      }


      if (result.nshelter) {
        formObject.nshelter2 = result.nshelter;
      } else {
        formObject.nshelter2 = null;
      }

      this.detailsForm.setValue(formObject);

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


  // UPDATE animalDetails. 
  updateAnimalDetails(form: any): Promise<any>{
    console.log("update animal details");

    this.asset = {
      $class: 'org.example.mynetwork.Pet',
      'organicDate': this.organicDate2.value,
      'kind': this.kind2.value,
      'discoveryAddress': this.discoveryAddress2.value,
      'name': this.name2.value,
      'age': this.age2.value,
      'gender': this.gender2.value,
      'weight': this.weight2.value,
      'healthStatus': this.healthStatus2.value,
      'disease': this.disease2.value,
      'protectStatus': this.protectStatus2.value,
      'animalSpecies': this.animalSpecies2.value,
      'description': this.description2.value,
      'furColor': this.furColor2.value,
      'endProtection': this.endProtection2.value,
      'guardian': this.guardian2.value,
      'nshelter': this.nshelter2.value
    };

    return this.servicePet.updateAsset(form.get('petSerial2').value, this.asset)
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

  getGuardian(id:string): Promise<any> {
    console.log("getGuardian으로 넘어온 id : "+id);

    var splitId = id.split("#");
    console.log("잘린 id : "+splitId[1]);
    //id="AA";
    
    return this.serviceGuardian.getAsset(splitId[1])
    .toPromise()
    .then((result) => {
      this.guardianErrorMessage = null;
      const formObject = {
        'guardianCode': null,
        'guardianName': null,
        'division': null,
        'protectDate': null,
        'phoneNum': null,
        'guardianAddress': null
      };

      if (result.guardianCode) {
        formObject.guardianCode = result.guardianCode;
        
      } else {
        console.log("result.guardianCode null");
        formObject.guardianCode = null;
      }

      if (result.name) {
        formObject.guardianName = result.name;
        
      } else {
        formObject.guardianName = null;
        console.log("result.name null");
      }

      if (result.division) {
        formObject.division = result.division;
        
      } else {
        formObject.division = null;
        console.log("division null");
      }

      if (result.protectDate) {
        formObject.protectDate = result.protectDate;
        
      } else {
        formObject.protectDate = null;
        console.log("result.protectDate null");
      }

      if (result.phoneNum) {
        formObject.phoneNum = result.phoneNum;
        
      } else {
        formObject.phoneNum = null;
        console.log("result.phoneNum null");
      }

      if (result.address) {
        formObject.guardianAddress = result.address;
        
      } else {
        formObject.guardianAddress = null;
        console.log("result.address null");
      }

      this.guardianForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.guardianErrorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.guardianErrorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.guardianErrorMessage = error;
      }
    });
    
  }

  updateAnimalGuardian(form: any): Promise<any>{
    console.log("update guardian");

    this.guardianAsset = {
      $class: 'org.example.mynetwork.Guardian',
      'name': this.guardianName.value,
      'division': this.division.value,
      'protectDate': this.protectDate.value,
      'phoneNum': this.phoneNum.value,
      'address': this.guardianAddress.value
    };

    return this.serviceGuardian.updateAsset(form.get('guardianCode').value, this.guardianAsset)
    .toPromise()
    .then(() => {
      this.guardianErrorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.guardianErrorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.guardianErrorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.guardianErrorMessage = error;
      }
    });


  }

  resetGuardianForm(): void {
    this.guardianForm.setValue({
      'guardianCode': null,
      'guardianName': null,
      'division': null,
      'protectDate': null,
      'phoneNum': null,
      'guardianAddress': null
      });
  }





}
