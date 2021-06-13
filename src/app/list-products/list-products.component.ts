import {Component, OnInit} from '@angular/core';
import {ProductData} from '../ProductData';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: ProductData[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
    console.log('Intilizare');
  }

  goToViewPage(id: number): void {
    this.router.navigateByUrl('view-product/' + id);
  }

  goToEditPage(id: number): void {
    this.router.navigateByUrl('edit-product/' + id);
  }

  goToAddProduct(): void {
    this.router.navigateByUrl('add-product');
  }
}
