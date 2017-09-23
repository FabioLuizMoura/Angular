import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountsList } from './account/accounts_list.component';
import { AccountFormComponent } from './account/account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsList,
    AccountFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
