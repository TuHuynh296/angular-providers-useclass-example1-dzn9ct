import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { FakeProductService } from './fake-product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // providers: [],
})
export class AppComponent {
  products: Product[];

  constructor(private productService: FakeProductService) {}

  getProducts() {
    this.products = this.productService.getProducts();
  }
}
