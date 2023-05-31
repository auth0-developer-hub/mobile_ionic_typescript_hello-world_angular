import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';

import { environment as env } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FEATURE_COMPONENTS } from './features';
import { SharedModule } from './shared';

@NgModule({
  declarations: [AppComponent, ...FEATURE_COMPONENTS],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AuthModule.forRoot({
      ...env.auth0,
      httpInterceptor: {
        allowedList: [`${env.api.serverUrl}/api/messages/admin`, `${env.api.serverUrl}/api/messages/protected`],
      },
    }),
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
        provide: RouteReuseStrategy,
        useClass: IonicRouteStrategy
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
