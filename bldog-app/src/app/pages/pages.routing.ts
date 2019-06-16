import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { ServiceSelectComponent } from './service-select/service-select.component';

import { DonationRegisterComponent } from './donation-register/donation-register.component';
import { DonationCodeComponent } from './donation-code/donation-code.component';
import { CodeResearchComponent } from './code-research/code-research.component';
import { DonationDetailsComponent} from './donation-details/donation-details.component';

export const PagesRoutes: Routes = [

    {
        path: '',
        children: [  {
            path: 'serviceSelect',
            component: ServiceSelectComponent
        },{
            path: 'login',
            component: LoginComponent
        }, {
            path: 'lock',
            component: LockComponent
        }, {
            path: 'register',
            component: RegisterComponent
        }, {
            path: 'pricing',
            component: PricingComponent
        }, {
            path: 'donation-register',
            component: DonationRegisterComponent 
        }, {
            path: 'donation-code',
            component: DonationCodeComponent
        }, {
            path: 'code-research',
            component: CodeResearchComponent 
        }, {
            path: 'donation-details',
            component: DonationDetailsComponent
        }
    
        ]
    }
];
