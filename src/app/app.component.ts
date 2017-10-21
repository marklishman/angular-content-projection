import { Component } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  template: `
    <app-content>
      <div header>
        Header content
      </div>
      <div body>
        Body content
      </div>
    </app-content>
  `
})
export class AppComponent {
}
