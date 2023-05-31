import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logout-button',
  template: `
    <ion-button class="button__logout" expand="block" fill="solid" mode="ios" (click)="handleLogout()">Log Out</ion-button>
  `,
})
export class LogoutButtonComponent {
  auth = inject(AuthService);

  handleLogout(): void {
    this.auth
      .logout({
        logoutParams: {
          returnTo: environment.auth0.authorizationParams.redirect_uri
        },
        openUrl: (url) => Browser.open({ url })
      })
      .subscribe();
  }
}
