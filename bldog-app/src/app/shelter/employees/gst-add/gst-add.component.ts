import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from 'app/shelter/business.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import Business from 'app/shelter/Business';


@Component({
  selector: 'app-gst-add',
  templateUrl :  './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  businesses: Business[];
  constructor(private fb: FormBuilder,
    private bs: BusinessService,
    private route: ActivatedRoute,
    private router: Router) {
    this.createForm();
  }
 
  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],
      business_gst_duty: ['', Validators.required],
      business_gst_number: ['', Validators.required ],
      business_gst_email: ['', Validators.required],
      //business_gst_address: ['', Validators.required ],
      business_gst_date: ['', Validators.required ]
    });
  }

  addBusiness(person_name, busines_name, business_gst_duty, business_gst_number, business_gst_email, business_gst_date) {
     this.bs.addBusiness(person_name, busines_name, business_gst_duty, business_gst_number, business_gst_email, business_gst_date);
     this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/shelter/employees'], {queryParams: {} }
      ),
    );
  }
  
  ngOnInit() {  }

}