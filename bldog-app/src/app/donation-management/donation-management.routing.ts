import { Routes } from '@angular/router';

import { DonationLedgerComponent} from './donation-ledger/donation-ledger.component';

export const DonationManagementRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'donation-ledger',
        component: DonationLedgerComponent
    }]
}
];
