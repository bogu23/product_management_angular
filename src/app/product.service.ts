import {Injectable} from '@angular/core';
import {ProductData} from './ProductData';
import {ManufacturerData} from './ManufacturerData';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductData[] = [];

  constructor() {
    let product1: ProductData = new ProductData();
    product1.id = 1;
    product1.price = 20;
    product1.description = 'Produs nou';
    product1.image = 'https://expertliquids.ro/image/cache/catalog/Produse/coca-cola-1.25l-min-650x650.png';
    product1.name = 'Coca-cola';

    let manufacturer1: ManufacturerData = new ManufacturerData();
    manufacturer1.id = 1;
    manufacturer1.name = 'Cola Company';
    manufacturer1.address = 'Craiova Strada parcului ';
    product1.manfacturer = manufacturer1;

    this.products.push(product1);

    let product2: ProductData = new ProductData();
    product2.id = 2;
    product2.price = 22;
    product2.description = 'Produs nou';
    product2.image = 'https://www.britishcornershop.co.uk/img/large/SGN0316.jpg';
    product2.name = 'Fanta';
    product2.manfacturer = manufacturer1;
    this.products.push(product2);
  }

  getAll(): Observable<ProductData[]> {
    return of(this.products);
  }

  getById(id: number): Observable<ProductData> {
    let productFound = this.products.find(product => product.id == id);
    return of(productFound);
  }


  edit(product: ProductData): Observable<any> {
    return of(null);
  }

  add(product: ProductData): Observable<any>{
    product.id = this.products.length + 1;
    product.manfacturer.id = this.products.length + 1;
    this.products.push(product);
    return of(null);
  }


  deleteById(id: number): Observable<any> {
    let index = this.products.findIndex(product => product.id == id);
    if (index > -1) {
      this.products.splice(index, 1);
    }
    return of(null);
  }
}
