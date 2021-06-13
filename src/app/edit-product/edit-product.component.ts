import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductData} from '../ProductData';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: ProductData =  new ProductData();

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    let id =  this.activatedRoute.snapshot.params['id'];
    this.productService.getById(id).subscribe(receivedProduct => {
        this.product = receivedProduct;
    });
  }

  update(): void{
    this.productService.edit(this.product).subscribe( () => {
      this.router.navigateByUrl('');
    });
  }

}
