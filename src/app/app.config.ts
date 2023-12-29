import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "katastasis-wed", "appId": "1:643885718313:web:f5ac353293a28c7ffcb538", "storageBucket": "katastasis-wed.appspot.com", "apiKey": "AIzaSyDN5pe_z-DdIMhfUEi7BBGcS20yWgT5Ny0", "authDomain": "katastasis-wed.firebaseapp.com", "messagingSenderId": "643885718313", "measurementId": "G-N4LCMGGYEV" }))), importProvidersFrom(provideFirestore(() => getFirestore())), provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    }), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"test-ng-deeplinks","appId":"1:866608855731:web:6619112924493578e8cec6","storageBucket":"test-ng-deeplinks.appspot.com","apiKey":"AIzaSyC2DUwIgKawNnmggb2voE1XM-P1rpbgtrw","authDomain":"test-ng-deeplinks.firebaseapp.com","messagingSenderId":"866608855731","measurementId":"G-96JBGZ1GB1"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
