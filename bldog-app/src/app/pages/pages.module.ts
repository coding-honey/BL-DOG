import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { ServiceSelectComponent } from './service-select/service-select.component';
import { DonationRegisterComponent } from './donation-register/donation-register.component';
import { DonationCodeComponent } from './donation-code/donation-code.component';
import { CodeResearchComponent } from './code-research/code-research.component';
import { DonationDetailsComponent } from './donation-details/donation-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    PricingComponent,
    LockComponent,
    ServiceSelectComponent,
    DonationRegisterComponent,
    DonationCodeComponent,
    CodeResearchComponent,
    DonationDetailsComponent
  ]
})

export class PagesModule {}
