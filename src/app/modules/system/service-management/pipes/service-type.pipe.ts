import { Pipe, PipeTransform } from '@angular/core';

/**
 * interfaces
 */
import { IService } from '../interfaces/service';

/**
 * enums
 */
import { SERVICE_TYPE } from '../enums/service-type';

@Pipe({
  name: 'serviceType'
})
export class ServiceTypePipe implements PipeTransform {

  transform(value: IService, ...args: unknown[]): string {

    /**
     * handler empty value
     */
    if (value == null) return "Trash";

    // ES6 Destruction
    const { type } = value;
    
    /**
     * ( Hacked ) that meaning back-end is hacked
     */
    switch(type) {
      case SERVICE_TYPE.Normal:
        return "Normal";
      case SERVICE_TYPE.Pro:
        return "Pro";
      case SERVICE_TYPE.Vip:
        return "Vip";
      default:
        return "Hack"
    }

  }

}
