import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * enums
 */
import { BADGE_TYPE } from './enums/badge-type';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  imports: [NgClass],
})
export class BadgeComponent {

  /**
   * @description ClassList to set class value
   */
  @Input({ alias: "classList" }) public Class: string = "";

  /**
   * @description to defined which ui that will show
   */
  @Input({ alias: "type" }) public Type!: BADGE_TYPE

  /**
   * @description return css class depend on type value
   */
  public get GetBadgeType(): string | null {

    switch(this.Type) {
      case BADGE_TYPE.Primary:
        return "primary";
      case BADGE_TYPE.Secondary:
        return "secondary";
      case BADGE_TYPE.Success:
        return "success";
      case BADGE_TYPE.Warning:
        return "warning";
      default:
        return ""
    }

  }

}
