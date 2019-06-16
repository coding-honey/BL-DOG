import { Injectable } from '@angular/core';
import { DataService } from 'app/data.service';
import { Observable } from 'rxjs/Observable';
import { Pet } from 'app/org.example.mynetwork';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class AdoptedAnimalService {

  private NAMESPACE = 'Pet';

  constructor(private dataService: DataService<Pet>) {
  };

  public getAll(): Observable<Pet[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

  public getAsset(id: any): Observable<Pet> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

  public addAsset(itemToAdd: any): Observable<Pet> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }

  public updateAsset(id: any, itemToUpdate: any): Observable<Pet> {
    return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
  }

  public deleteAsset(id: any): Observable<Pet> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

  public getAllByShelter(shelterId: any): Observable<Pet[]>{
    //shelterId='AAA';
    return this.dataService.getAllByShelter(shelterId);
  }

  // getAllByProtectStatus
  // public getAllByProtectStatus(shelterId: any): Observable<Pet[]>{
  //   //shelterId='AAA';
  //   return this.dataService.getAllByProtectStatus(shelterId);
  // }

  public getAllByStatusProtect(shelterId: any): Observable<Pet[]>{
    return this.dataService.getAllByStatusProtect(shelterId);
  }

  public getAllByStatusUnProtected(shelterId: any): Observable<Pet[]>{
    return this.dataService.getAllByStatusUnProtected(shelterId);
  }

}
