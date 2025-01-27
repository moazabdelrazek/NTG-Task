import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of, share, Subject, switchMap, tap } from 'rxjs';

/**
 * interfaces
 */
import { IService } from '../interfaces/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceManagementService {

  /**
   * @description loading state while data has coming
   */
  public IsLoading: boolean = false;


  /**
   * @description to store services in Observable
   */
  public Services$ = new BehaviorSubject<IService[]>([]);

  /**
   * @description get store data as simulate http request
   */
  public GetData$ = this.Services$.pipe(
    tap(_ => this.IsLoading = true),
    delay(2000),
    tap(_ => this.IsLoading = false)
  )

  constructor() {

    /**
     * init
     */
    const services = [
      { "id": 1, "name": "Property Exchange", "code": "p-t033", "type": 2, "status": 1 },
      { "id": 2, "name": "Property Transfer", "code": "p-t075", "type": 3, "status": 0 },
      { "id": 3, "name": "Property Rent", "code": "p-t063", "type": 2, "status": 0 },
      { "id": 4, "name": "Property Sale", "code": "p-t050", "type": 2, "status": 1 },
      { "id": 5, "name": "Property Lease", "code": "p-t023", "type": 1, "status": 0 },
      { "id": 6, "name": "Property Rent", "code": "p-t090", "type": -1, "status": -1 },
      { "id": 7, "name": "Property Transfer", "code": "p-t014", "type": 1, "status": 1 },
      { "id": 8, "name": "Property Lease", "code": "p-t032", "type": 2, "status": 0 },
      { "id": 9, "name": "Property Transfer", "code": "p-t062", "type": 2, "status": 1 },
      { "id": 10, "name": "Property Sale", "code": "p-t026", "type": 3, "status": 1 },
      { "id": 11, "name": "Property Sale", "code": "p-t098", "type": 1, "status": 0 },
      { "id": 12, "name": "Property Sale", "code": "p-t061", "type": 3, "status": 1 },
      { "id": 13, "name": "Property Transfer", "code": "p-t015", "type": 1, "status": 1 },
      { "id": 14, "name": "Property Lease", "code": "p-t098", "type": 1, "status": 1 },
      { "id": 15, "name": "Property Lease", "code": "p-t091", "type": 2, "status": 0 },
      { "id": 16, "name": "Property Exchange", "code": "p-t023", "type": 2, "status": 1 },
      { "id": 17, "name": "Property Sale", "code": "p-t025", "type": 2, "status": 0 },
      { "id": 18, "name": "Property Exchange", "code": "p-t035", "type": 2, "status": 0 },
      { "id": 19, "name": "Property Transfer", "code": "p-t096", "type": 3, "status": 1 },
      { "id": 20, "name": "Property Exchange", "code": "p-t057", "type": 3, "status": 0 },
      { "id": 21, "name": "Property Lease", "code": "p-t031", "type": 2, "status": 0 },
      { "id": 22, "name": "Property Transfer", "code": "p-t080", "type": 3, "status": 0 },
      { "id": 23, "name": "Property Rent", "code": "p-t069", "type": 1, "status": 1 },
      { "id": 24, "name": "Property Transfer", "code": "p-t055", "type": 2, "status": 0 },
      { "id": 25, "name": "Property Transfer", "code": "p-t026", "type": 3, "status": 1 },
      { "id": 26, "name": "Property Transfer", "code": "p-t040", "type": 2, "status": 0 },
      { "id": 27, "name": "Property Exchange", "code": "p-t040", "type": 1, "status": 1 },
      { "id": 28, "name": "Property Lease", "code": "p-t069", "type": 3, "status": 1 },
      { "id": 29, "name": "Property Lease", "code": "p-t042", "type": 2, "status": 1 },
      { "id": 30, "name": "Property Sale", "code": "p-t034", "type": 3, "status": 1 }
    ]

    /**
     * 
     */
    this.Update(services);

  }

  /**
   * 
   */
  public Update(list: IService[]): void {
    this.Services$.next(list)
  }

  /**
   * 
   */
  public GetById(id: number): IService | null {
    
    // get 
    const s =  this.Services$.value.find(s => s.id == id);
    
    // 
    if (s != null) return s;

    return null;

  }
}
