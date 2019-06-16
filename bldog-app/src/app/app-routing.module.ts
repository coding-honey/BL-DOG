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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { PetComponent } from './Pet/Pet.component';
import { GuardianComponent } from './Guardian/Guardian.component';
import { DonationFormComponent } from './DonationForm/DonationForm.component';

import { ShelterComponent } from './Shelter/Shelter.component';

import { TradeComponent } from './Trade/Trade.component';
import { ChangeGuardianComponent } from './ChangeGuardian/ChangeGuardian.component';
import { petCountByShelterComponent } from './petCountByShelter/petCountByShelter.component';
import { CreateDonationComponent } from './CreateDonation/CreateDonation.component';
import { DonationSumComponent } from './DonationSum/DonationSum.component';
import { NumberTestingComponent } from './NumberTesting/NumberTesting.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Pet', component: PetComponent },
  { path: 'Guardian', component: GuardianComponent },
  { path: 'DonationForm', component: DonationFormComponent },
  { path: 'Shelter', component: ShelterComponent },
  { path: 'Trade', component: TradeComponent },
  { path: 'ChangeGuardian', component: ChangeGuardianComponent },
  { path: 'petCountByShelter', component: petCountByShelterComponent },
  { path: 'CreateDonation', component: CreateDonationComponent },
  { path: 'DonationSum', component: DonationSumComponent },
  { path: 'NumberTesting', component: NumberTestingComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
