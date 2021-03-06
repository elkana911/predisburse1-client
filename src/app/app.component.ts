import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'predisburse1-client';

  showSpinner: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event)  => {

      if (event instanceof NavigationStart) {
        this.showSpinner = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.showSpinner = false;
      }

    }

    );
  }
}
