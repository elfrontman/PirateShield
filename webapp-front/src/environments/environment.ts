// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //API_URL: 'http://127.0.0.1:8000/backend',
  //API_URL: 'http://192.168.1.108:8000/backend',
  API_URL: 'http://ec2-3-84-219-164.compute-1.amazonaws.com:8080/backend',
  STATIC_URL: 'http://ec2-3-84-219-164.compute-1.amazonaws.com:8080/static/backend',
  SoketIoConfig: { 
  	url: 'http://ec2-3-84-219-164.compute-1.amazonaws.com:500',
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
