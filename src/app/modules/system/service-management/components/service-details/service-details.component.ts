import { UpperCasePipe } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

/**
 * interfaces
 */
import { IService } from '../../interfaces/service';

/**
 * pipes
 */
import { ServiceTypePipe } from '../../pipes/service-type.pipe';

/**
 * icons
 */
import { LeftIconComponent } from "@icon/svg/left-icon/left-icon.component";

/**
 * shared components
*/
import { ButtonComponent } from "@shared/button/button.component";
import { SectionCardComponent } from '@shared/section-card/section-card.component';
import { InnerContentComponent } from '@shared/section-card/components/inner-content/inner-content.component';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
  imports: [
    /**
     * pipes
     */
    UpperCasePipe,
    ServiceTypePipe,
    /**
     * directives
    */
    RouterLink,
    /**
     * components
     */
    ButtonComponent,
    LeftIconComponent,
    SectionCardComponent,
    InnerContentComponent,
],
})
export class ServiceDetailsComponent implements OnInit {

  /**
   * 
   */
  public get GetService(): IService {
    return this._route.snapshot.data['service']
  }

  /**
   * @description get title depend on service name
   */
  private get _getTitlePage(): string | undefined{
    return this.GetService.name
  }

  constructor(
    private _meta: Meta,
    private _title: Title,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // update meta description
    this._meta.addTag({name: 'description', content: "Service Details lab lab lab"})

    // update route title
    if (this._getTitlePage != null) this._title.setTitle(this._getTitlePage)

  }

}
