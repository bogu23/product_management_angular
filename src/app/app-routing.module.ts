import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListProductsComponent} from './list-products/list-products.component';
import {ViewDetailsComponent} from './view-details/view-details.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {AddProductComponent} from './add-product/add-product.component';


const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'view-product/:id', component: ViewDetailsComponent},
  {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'add-product', component: AddProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
