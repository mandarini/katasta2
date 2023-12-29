import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'test-ng-deeplinks',
          appId: '1:866608855731:web:6619112924493578e8cec6',
          storageBucket: 'test-ng-deeplinks.appspot.com',
          apiKey: 'AIzaSyC2DUwIgKawNnmggb2voE1XM-P1rpbgtrw',
          authDomain: 'test-ng-deeplinks.firebaseapp.com',
          messagingSenderId: '866608855731',
          measurementId: 'G-96JBGZ1GB1',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
