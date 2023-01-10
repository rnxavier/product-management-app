import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  //Declaring components, directives and pipes that belong to this module
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  //Pulling in external modules and registering Angular services
  imports: [
    //BrowserModule should only be imported into AppModule, then use CommonModule in other modules to access its ng exports 
    BrowserModule,
    RouterModule.forRoot([
      {path: "welcome", component: WelcomeComponent},
      {path: "", redirectTo: "welcome", pathMatch: "full"},
      {path: "**", redirectTo: "welcome", pathMatch: "full"}
    ]),
    FontAwesomeModule,
    HttpClientModule,
    ProductModule
  ],
  //Can register custom services here but not recommended (use Injectaable decorator instead)
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
