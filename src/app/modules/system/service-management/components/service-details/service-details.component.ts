import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

/**
 * shared components
*/
import { SectionCardComponent } from '@app/modules/shared/section-card/section-card.component';
import { InnerContentComponent } from '@app/modules/shared/section-card/components/inner-content/inner-content.component';
import { IService } from '../../interfaces/service';
import { ServiceTypePipe } from '../../pipes/service-type.pipe';
import { ButtonComponent } from "../../../../shared/button/button.component";
import { LeftIconComponent } from "../../../../shared/icons/svg/left-icon/left-icon.component";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
  imports: [
    ServiceTypePipe,
    SectionCardComponent,
    InnerContentComponent,
    ButtonComponent,
    LeftIconComponent,
    UpperCasePipe,
    RouterLink,
],
})
export class ServiceDetailsComponent {

  /**
   * 
   */
  public get GetService(): IService {
    return this._route.snapshot.data['service']
  }

  constructor(private _route: ActivatedRoute) {}

}
