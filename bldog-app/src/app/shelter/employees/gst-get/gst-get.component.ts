import { Component, OnInit } from '@angular/core';

import { BusinessService } from 'app/shelter/business.service';
import Business from 'app/shelter/Business';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-get',
  templateUrl :  './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

    businesses: Business[];

  constructor(private bs: BusinessService,
    private router: Router) { }
  // gst-get.component.ts

  deleteBusiness(id) {
      this.bs.deleteBusiness(id).subscribe(res => {
          console.log('Deleted');
          location.reload();
      });
  }
  
  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businesses = data; 
    });
  }

}
