// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:8000/backend',
  STATIC_URL: 'http://localhost/static/backend',

  // SoketIoConfig: { 
  //   //url: 'http://190.60.205.188:500',
  //   url: 'http://localhost:500',
  // 	options: {}
  // }

  // API_URL: 'http://190.60.205.188:8080/backend',
  // STATIC_URL: 'http://190.60.205.188:8080/static/backend',
  SoketIoConfig: { 
  	url: 'http://190.60.205.188:500',
  	options: {}
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
