import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { usersReducer } from './store/users/users.reducer';
import { UsersEffects } from './store/users/users.effects';
import { provideRouterStore } from '@ngrx/router-store';
import { tasksReducer } from './store/tasks/tasks.reducer';
import { TasksEffects } from './store/tasks/tasks.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes, 
      withComponentInputBinding(),
    withRouterConfig({
      paramsInheritanceStrategy:'always'
    })),
    provideStore({
        reducer: usersReducer,
        tasks:tasksReducer
  
    }),
    provideEffects([UsersEffects,TasksEffects]),
    provideRouterStore()
]
};
