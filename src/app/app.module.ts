import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  //Declaring components, directives and pipes that belong to this module
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  //Pulling in external modules
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "products", component: ProductListComponent},
      {path: "products/:productName", component: ProductDetailComponent},
      {path: "welcome", component: WelcomeComponent},
      {path: "", redirectTo: "welcome", pathMatch: "full"},
      {path: "**", redirectTo: "welcome", pathMatch: "full"}
    ]),
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
