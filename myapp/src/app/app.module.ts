import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { SecretdisplaywithlogComponent } from './secretdisplaywithlog/secretdisplaywithlog.component';
import { ProductComponent } from './products/product/product.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { LifecycledemoComponent } from './lifecycledemo/lifecycledemo.component';
import { BasicHighLightDirective } from './CustomDIrectives/BasicHIghlightDirective';
import { BetterHighlightDirective } from './CustomDirectives/better-highlight.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { AccountComponent } from './accounts/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    NamesComponent,
    SecretdisplaywithlogComponent,
    ProductComponent,
    AddproductComponent,
    LifecycledemoComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    AccountsComponent,
    NewaccountComponent,
    AccountComponent,
  ],
  imports: [BrowserModule,FormsModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
