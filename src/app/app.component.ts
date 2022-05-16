import {Component, OnInit} from '@angular/core';

// Selector is the name of the page
// Another ways to use the selector:
// 1: selector: 'app-root'
// Call:   <app-root></app-root>
// 2: selector: '[app-root]' --> make it attribute
// Call: <div app-root></div>
// 3: selector: '.app-root'
// Call: <div class="app-root"></div>

// At least one template is needed
// another way to use template is to use html code inside
// template: `
//     <app-header></app-header>
//     <router-outlet></router-outlet>
//     <app-footer></app-footer>`,

// Also, in order to add inline css style, replace styleUrls with the following:
// styles: [`
// h2{
// color: blue;
// }
// `]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WoolenCreations';

  constructor() {}

  ngOnInit() {
    // Arrow function expressions
    // Does not have its own bindings to this or super, and should not be used as methods.
    // Does not have new.target keyword.
    // Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
    // Can not be used as constructors.
    // Can not use yield, within its body.
  }

  // Retrieve a method in typescript
  getMethod() {
    return this.title;
  }
}
