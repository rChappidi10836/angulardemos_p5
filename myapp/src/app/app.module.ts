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
import { BetterHighlightDirective } from './CustomDIrectives/better-highlight.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { AccountComponent } from './accounts/account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservablesdemoComponent } from './observablesdemo/observablesdemo.component';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogpostComponent } from './blogposts/blogpost/blogpost.component';
import { QuizProjComponent } from './quiz-proj/quiz-proj.component';
import { QuesetComponent } from './quiz-proj/queset/queset.component';
import { ScoreComponent } from './quiz-proj/score/score.component';
import { BlogProjComponent } from './blog-proj/blog-proj.component';
import { BlogComponent } from './blog-proj/blog/blog.component';




const appRoutes: Routes = [
{path: '', component: HomeComponent},
{path:'Products',component: ProductsComponent},
{path:'Names',component: NamesComponent},
{path:'Lifecycle',component: LifecycledemoComponent},
{path:'SecretDis&Clickstamp',component: SecretdisplaywithlogComponent},
{path: 'Server',component: ServerComponent}, 
{path: 'warningalert',component: WarningAlertComponent},
{path: 'Accounts',component: AccountsComponent},
{path: 'Observables',component: ObservablesdemoComponent},
{path: 'tforms',component: TformsComponent},
{path: 'rforms',component: RformsComponent},
{path: 'blogposts',component: BlogpostsComponent},
{path: 'QuizProj',component: QuizProjComponent},
{path: 'BlogProj',component: BlogProjComponent},

];

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
    HomeComponent,
    ObservablesdemoComponent,
    TformsComponent,
    RformsComponent,
    BlogpostsComponent,
    BlogpostComponent,
    QuizProjComponent,
    QuesetComponent,
    ScoreComponent,
    BlogProjComponent,
    BlogComponent,
   
  ],
  imports: [BrowserModule,FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
