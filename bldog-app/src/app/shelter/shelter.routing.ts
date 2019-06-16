import { Routes} from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { CommodityComponent } from './commodity/commodity.component';
import { EmployeesComponent } from './employees/employees.component';
import { InformationComponent } from './information/information.component';
import { ShelterCalendarComponent } from './shelter-calendar/shelter-calendar.component';
import { GstAddComponent } from './employees/gst-add/gst-add.component';
import { GstEditComponent } from './employees/gst-edit/gst-edit.component';
import { GstGetComponent } from './employees/gst-get/gst-get.component';

export const ShelterRoutes: Routes = [
    {
        path:'',
        children: [{
            path:'info',
            component: InformationComponent
        }]

    }, {
        path:'',
        children: [{
            path:'employees',
            component: EmployeesComponent
            
        }]
    }, {
        path:'',
        children: [{
            path:'commodity',
            component: CommodityComponent
            
        }]
    }, {
        path:'',
        children: [{
            path:'calendar',
            component: ShelterCalendarComponent
            
        }]
    }, {
        path:'',
        children: [{
            path:'chart',
            component: ChartComponent
            
        }]
    },

    {
        path:'',
        children: [{
            path:'employees/business/create',
            component: GstAddComponent
            
        }]
    },
    
    {
        path:'',
        children: [{
            path:'employees/business',
            component: GstGetComponent
            
        }]
    },

   {
        path:'',
        children: [{
            path:'employees/business/edit/:id',
            component: GstEditComponent
            
        }]
    },

 ]