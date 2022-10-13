import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  id = 0;
  product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };

  constructor(private aRoute: ActivatedRoute, private prodServ: ProductsService) {
    this.aRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') || '0');
    });
  }

  ngOnInit(): void {
    this.prodServ.getProduct(this.id).subscribe(data => {
      this.product = data || { id: 0, name: '', price: 0, url: '', description: '' };
      this.product.count = this.product.count ? this.product.count : 1;
    });
  }

  addProductToCart(product: IProduct) {
    this.prodServ.addProductToCart(product);
  }

}
