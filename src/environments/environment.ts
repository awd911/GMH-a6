// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/',
  firebase: {
    projectId: 'gmh-backend-a6',
    appId: '1:838824358882:web:98d36daa96fbb3a2ce7fbb',
    storageBucket: 'gmh-backend-a6.appspot.com',
    apiKey: 'AIzaSyByee84-wmgaGy_D_MleSw4fo4Mw_bnpi4',
    authDomain: 'gmh-backend-a6.firebaseapp.com',
    messagingSenderId: '838824358882',
    measurementId: 'G-QLFB7BW1E3',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
