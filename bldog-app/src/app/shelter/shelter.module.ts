import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';

import { InformationComponent } from './information/information.component';
import { ChartComponent } from './chart/chart.component';
import { ShelterCalendarComponent } from './shelter-calendar/shelter-calendar.component';
import { CommodityComponent } from './commodity/commodity.component';
import { EmployeesComponent } from './employees/employees.component';

import { ShelterRoutes } from './shelter.routing';
import { GstAddComponent } from './employees/gst-add/gst-add.component';
import { GstGetComponent } from './employees/gst-get/gst-get.component';
import { GstEditComponent } from './employees/gst-edit/gst-edit.component';
import { BusinessService } from './business.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ShelterRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ],
  declarations: [
    InformationComponent, 
    ChartComponent, 
    ShelterCalendarComponent, 
    CommodityComponent, 
    EmployeesComponent, GstAddComponent, GstGetComponent, GstEditComponent

    ],
    providers: [
      BusinessService
    ],
  
})
export class ShelterModule { }
