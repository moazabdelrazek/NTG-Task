import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

/**
 * services
 */
import { TrackPathService } from '@app/modules/core/header/services/track-path.service';

export const trackPathResolver: ResolveFn<boolean> = (route, state) => {

  // ES6 Destruction
  const { data: { path } = {} } = route;

  // init
  const _trackPath = inject(TrackPathService);

  _trackPath.UpdatePath(path)

  return true;
};
