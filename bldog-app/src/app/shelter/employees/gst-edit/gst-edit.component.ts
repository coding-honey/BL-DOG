// gst-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { BusinessService } from 'app/shelter/business.service';
import Business from 'app/shelter/Business';


@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  businesses: Business[];

  //필드 총 6개
  person_name = new FormControl('', Validators.required);
  business_name = new FormControl('', Validators.required);
  business_gst_duty = new FormControl('', Validators.required);
  business_gst_number = new FormControl('', Validators.required);
  business_gst_email  = new FormControl('', Validators.required);
  business_gst_date = new FormControl('', Validators.required);

  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
      //this.createForm();

      this.angForm = fb.group({
        person_name : this.person_name,
        business_name : this.business_name,
        business_gst_duty : this.business_gst_duty,
        business_gst_number : this.business_gst_number ,
        business_gst_email : this.business_gst_email,
        business_gst_date : this. business_gst_date
      });
 }

  // createForm() {
  //   this.angForm = this.fb.group({
  //       person_name: ['', Validators.required ],
  //       business_name: ['', Validators.required ],
  //       business_gst_duty: ['', Validators.required],
  //       business_gst_number: ['', Validators.required ],
  //       business_gst_email: ['', Validators.required ],
  //       //business_gst_address: ['', Validators.required ],
  //       business_gst_date: ['', Validators.required]
  //     });
  //   }


    // gst-edit.component.ts

updateBusiness(person_name, business_name, business_gst_duty, business_gst_number, business_gst_email, business_gst_date) {
  this.route.params.subscribe(params => {
     this.bs.updateBusiness(person_name, business_name, business_gst_duty, business_gst_number, business_gst_email, business_gst_date, params['id']);
     this.router.navigate(['business']);
  }
  
  );
}
 
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editBusiness(params['id']).subscribe(res => {
          this.business = res;
      });
    });
  }

  
  
}