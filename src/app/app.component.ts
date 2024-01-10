import { Component } from "@angular/core";      //import Statement
 
@Component({                                  //MetaData
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <pm-products></pm-products>
    </div>
  `
})
export class AppComponent {                       //Class
  pageTitle: string = 'Acme Product Management';
}