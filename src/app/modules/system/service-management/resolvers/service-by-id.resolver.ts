import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';

/**
 * services
 */
import { ServiceManagementService } from '../services/service-management.service';

/**
 * interfaces
 */
import { IService } from '../interfaces/service';

export const serviceByIdResolver: ResolveFn<IService | false> = (route, state) => {

  // ES6 Destruction
  const { id } = route.params
  
  // inject
  const _router = inject(Router);
  const _serviceManagement = inject(ServiceManagementService);

  // 
  const s = _serviceManagement.GetById(id);

  if (s != null) return s;

  _router.navigate(['dashboard', 'service-management'])
  return s ? s : false

};
