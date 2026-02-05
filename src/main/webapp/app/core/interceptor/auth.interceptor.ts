import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { StateStorageService } from 'app/core/auth/state-storage.service';
import { ApplicationConfigService } from '../config/application-config.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const stateStorageService = inject(StateStorageService);
  const applicationConfigService = inject(ApplicationConfigService);

  const serverApiUrl = applicationConfigService.getEndpointFor('');
  if (!req.url || (req.url.startsWith('http') && !(serverApiUrl && req.url.startsWith(serverApiUrl)))) {
    return next(req);
  }

  const token = stateStorageService.getAuthenticationToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return next(req);
};
