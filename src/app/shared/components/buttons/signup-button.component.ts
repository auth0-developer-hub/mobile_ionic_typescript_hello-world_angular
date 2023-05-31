import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-signup-button',
  template: `
    <ion-button class="button__sign-up" expand="block" fill="clear" mode="ios" (click)="handleSignUp()">Sign Up</ion-button>
  `,
})
export class SignupButtonComponent {
  auth = inject(AuthService);

  handleSignUp(): void {
    this.auth
      .loginWithRedirect({
          authorizationParams: {
            prompt: 'login',
            screen_hint: 'signup'
          },
          openUrl: (url) => Browser.open({ url, windowName: '_self' })
      }).subscribe();
  }
}
