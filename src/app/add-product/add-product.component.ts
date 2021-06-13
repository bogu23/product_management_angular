import {Component, OnInit} from '@angular/core';
import {ProductData} from '../ProductData';
import {ManufacturerData} from '../ManufacturerData';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: ProductData = new ProductData();

  constructor(private productService: ProductService,
              private router: Router) {
    this.product.manfacturer = new ManufacturerData();
  }

  ngOnInit(): void {
  }

  addProduct(): void{
    this.productService.add(this.product).subscribe( () => {
        this.router.navigateByUrl('');
    } );
  }

}
