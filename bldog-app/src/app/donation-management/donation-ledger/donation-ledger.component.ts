import { Component, OnInit } from '@angular/core';
import {  DonationLedgerService } from './donation-ledger.service';

@Component({
  selector: 'app-donation-ledger',
  templateUrl: './donation-ledger.component.html',
  providers: [DonationLedgerService]
})
export class DonationLedgerComponent implements OnInit {


  private allAssets;
  private asset;
  private currentId;
  private errorMessage;


  constructor(private service : DonationLedgerService) { }

  ngOnInit() {

    this.loadAll();
  }



  loadAll(): Promise<any> {
    const tempList = [];
    return this.service.getAll() //getAll() //
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

}
