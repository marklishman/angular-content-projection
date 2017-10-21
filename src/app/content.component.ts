import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
      <h1>
        <ng-content select="[header]"></ng-content>
      </h1>
      <p>
        <ng-content select="[body]"></ng-content>
      </p>
  `
})
export class ContentComponent {
}
