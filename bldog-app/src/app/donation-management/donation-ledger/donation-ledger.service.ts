import { Injectable } from '@angular/core';
import { DataService } from 'app/data.service';
import { Observable } from 'rxjs/Observable';
import { HistorianRecord } from '../../org.hyperledger.composer.system';

import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class DonationLedgerService {

  private NAMESPACE = 'system/historian';

  constructor(private dataService: DataService<HistorianRecord>) {
  };

  public getAll(): Observable<HistorianRecord[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  

}
