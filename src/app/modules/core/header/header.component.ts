import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

/**
 * services
 */
import { TrackPathService } from './services/track-path.service';

/**
 * shared components
 */
import { BreadCrumbComponent } from '@shared/bread-crumb/bread-crumb.component';

/**
 * shared icons
 */
import { ChevronDownIconComponent } from "@icon/svg/chevron-down-icon/chevron-down-icon.component"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    /**
     * pipes
     */
    AsyncPipe,
    /**
     * shared components
     */
    BreadCrumbComponent,
    /**
     * icons
     */
    ChevronDownIconComponent
  ],
})
export class HeaderComponent {

  /**
   * inject
   */
  private _trackPath = inject(TrackPathService)

  /**
   * 
   */
  public get TrackPath() {
    return this._trackPath.TrackPath.asObservable()
  }


  /**
   *
   */
  constructor() {}

  ngOnInit(): void {
    
  }

}
