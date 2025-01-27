import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackPathService {

  /**
   * 
   */
  public readonly TrackPath: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])

  constructor() { }

  /**
   * 
   */
  public UpdatePath(path: string[]): void {

    // update 
    this.TrackPath.next([...path])

  }
}
