import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  private _router = inject(Router)
  private _route = inject(ActivatedRoute)


  /**
   *
   */
  constructor() {}

  ngOnInit(): void {

    // this._router
    //   .events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd),
    //   )
    //   .subscribe({
    //     next: _ => console.log(_, this._route)
    //   })

    // this._route?.title?.subscribe(console.log)
  }  

}
