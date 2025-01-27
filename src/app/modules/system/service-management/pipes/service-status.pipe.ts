import { Pipe, PipeTransform } from '@angular/core';

/**
 * interfaces
 */
import { IService } from '../interfaces/service';

/**
 * enums
 */
import { SERVICE_STATUS } from '../enums/service-status';
import { BADGE_TYPE } from '@app/modules/shared/badge/enums/badge-type';


@Pipe({
  name: 'serviceStatus'
})
export class ServiceStatusPipe implements PipeTransform {

  transform(value: IService, ...args: unknown[]): { label: string, badgeType: BADGE_TYPE } {

    /**
     * handler empty value
     */
    if (value == null) return { label: "Trash", badgeType: BADGE_TYPE.Warning}
    
    // ES6 Destruction
    const { status } = value;
    
    /**
     * ( Hacked ) that meaning back-end is hacked
     */
    switch(status) {
      case SERVICE_STATUS.Active:
        return { label: "Active", badgeType: BADGE_TYPE.Success }
      case SERVICE_STATUS.Inactive:
        return { label: "Inactive", badgeType: BADGE_TYPE.Warning }
      default:
        return { label: "Hacked", badgeType: BADGE_TYPE.Primary }
    }


  }

}
