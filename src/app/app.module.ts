import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {FormsModule} from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ManufacturerViewComponent } from './manufacturer-view/manufacturer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ViewDetailsComponent,
    EditProductComponent,
    AddProductComponent,
    ManufacturerViewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
