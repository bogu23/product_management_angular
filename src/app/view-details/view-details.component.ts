import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductData} from '../ProductData';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  product: ProductData = new ProductData();

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.productService.getById(id).subscribe(product => {
      this.product = product;
    });
    console.log('Am extras: ' + id);
  }

  deleteProduct(id: number): void {
    this.productService.deleteById(id).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }

  getClass(product: ProductData): string {
    if (product.price < 3) {
      return 'red';
    } else {
      return 'blue';
    }
  }
}
