
import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs/Observable';
import { DonationForm } from '../../org.example.mynetwork';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class CodeResearchService{

  private NAMESPACE = 'DonationForm';

  constructor(private dataService: DataService<DonationForm>) {
  };

  public getAll(): Observable<DonationForm[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getAsset(id: any): Observable<DonationForm> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addAsset(itemToAdd: any): Observable<DonationForm> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateAsset(id: any, itemToUpdate: any): Observable<DonationForm> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteAsset(id: any): Observable<DonationForm> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

  public getDonationByShelter(shelterId: any): Observable<DonationForm[]> {
    return this.dataService.getDonationByShelter(shelterId);
  }

}
