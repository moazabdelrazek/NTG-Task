import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * shared icons
*/
import { LogoIconComponent } from "@icon/svg/logo-icon/logo-icon.component";
import { AlertIconComponent } from '@app/modules/shared/icons/svg/alert-icon/alert-icon.component';
import { ServiceValueIconComponent } from "@icon/svg/service-value-icon/service-value-icon.component";
import { PricePackageIconComponent } from '@app/modules/shared/icons/svg/price-package-icon/price-package-icon.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    /**
     * directives
     */
    RouterLink,
    RouterLinkActive,
    /**
     * components
     */
    LogoIconComponent,
    AlertIconComponent,
    PricePackageIconComponent,
    ServiceValueIconComponent,
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

}
