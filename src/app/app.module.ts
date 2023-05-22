import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CoreFundsModule } from '../lib/core/funds/core-funds.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CoreAuthModule } from '../lib/core/auth/core-auth.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AdminPasswordModule } from '../lib/modals/admin-password/admin-password.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule,
    CoreFundsModule,
    CoreAuthModule,
    AdminPasswordModule,

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),

    EffectsModule.forRoot([]),

    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
