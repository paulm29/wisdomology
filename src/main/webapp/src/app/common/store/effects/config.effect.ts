import { catchError, map, of, switchMap } from 'rxjs';
import { loadConfiguration, loadConfigurationFailure, loadConfigurationSuccess } from '../actions/config.actions';
import { Injectable } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class ConfigEffect {
  constructor(private actions$: Actions, private configService: ConfigService) {}

  config$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadConfiguration),
      switchMap(() => {
        return this.configService.getConfig().pipe(
          map(config => loadConfigurationSuccess({ config })),
          catchError(error => of(loadConfigurationFailure({ error })))
        );
      })
    );
  });
}
