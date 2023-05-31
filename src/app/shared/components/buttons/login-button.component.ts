import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-login-button',
  template: `
    <ion-button class="button__login" expand="block" fill="solid" mode="ios" (click)="handleLogin()">Log In</ion-button>
  `,
})
export class LoginButtonComponent {
  auth = inject(AuthService);

  handleLogin(): void {
    this.auth
      .loginWithRedirect({
          authorizationParams: {
            prompt: 'login',
          },
          openUrl: (url) => Browser.open({ url, windowName: '_self' })
      }).subscribe();
  }
}
