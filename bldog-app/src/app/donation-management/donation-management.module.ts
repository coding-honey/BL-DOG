import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { DonationLedgerComponent} from './donation-ledger/donation-ledger.component';
import { DonationManagementRoutes} from './donation-management.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DonationManagementRoutes),
        FormsModule,
        MdModule,
        MaterialModule
    ],
    declarations: [DonationLedgerComponent]
})

export class DonationManagementModule {}
