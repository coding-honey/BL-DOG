import { Component,OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { InformationService } from '../information.service';
import { ActivatedRoute, Router } from '@angular/router';
import Information from 'app/shelter/information';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})

export class InformationComponent implements OnInit {
  
  ngAfterViewInit() {  }

  information: Information;

  myForm: FormGroup;
  detailsForm: FormGroup;


  shelterId = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  specified_date = new FormControl('', Validators.required);
  open_time_weekday = new FormControl('', Validators.required);
  close_time_weekday = new FormControl('', Validators.required);
  vet_number = new FormControl('', Validators.required);
  staff_number = new FormControl('', Validators.required);
  clinic_room = new FormControl('', Validators.required);
  breeding_room = new FormControl('', Validators.required);
  max_animal_number = new FormControl('', Validators.required);

  constructor(private route: ActivatedRoute,
    private router: Router,
    private is: InformationService,
    fb: FormBuilder){

    this.detailsForm = fb.group({
      shelterId: this.shelterId,
      address: this.address,
      specified_date: this.specified_date,
      open_time_weekday: this.open_time_weekday,
      close_time_weekday: this.close_time_weekday,
      vet_number: this.vet_number,
      staff_number: this.staff_number,
      clinic_room: this.clinic_room,
      breeding_room: this.breeding_room,
      max_animal_number: this.max_animal_number
    });

    

  }

  ngOnInit() {
    // this.is
    //   .getInformation()
    //   .subscribe((data: Information) => {
    //     this.information = data;
    //     this.shelterId.setValue(data.shelterId);
    //     this.address.setValue(data.address);
    //     this.specified_date.setValue(data.specified_date);
    //     this.open_time_weekday.setValue(data.open_time_weekday);
    //     this.close_time_weekday .setValue(data.close_time_weekday );
    //     this.vet_number .setValue(data.vet_number );
    //     this.staff_number.setValue(data.staff_number);
    //     this.clinic_room.setValue(data.clinic_room);
    //     this.breeding_room.setValue(data.breeding_room);
    //     this.max_animal_number.setValue(data. max_animal_number);
    // })
  }

  // loadAll() { //정보 불러오기. form에 붙이기.
  //   this.is
  //     .getInformation()
  //     .subscribe((data: Information) => {
  //       this.information = data; 
  //   });
  // }

  

  //
  updateShelterInformation(){ 
    this.route.params.subscribe(params => {
      this.is.updateInformation(this.address.value, this.specified_date.value, this.open_time_weekday.value, 
        this.close_time_weekday.value, this.vet_number.value,  this.staff_number.value,
        this.clinic_room.value, this.breeding_room.value, this.max_animal_number.value);
      //this.router.navigate(['business']);
   });

  }
  

}