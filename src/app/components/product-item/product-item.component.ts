import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };

  constructor(private prodServ: ProductsService) { }

  ngOnInit(): void {
  }

  addProductToCart( product : IProduct){
    this.prodServ.addProductToCart(product);
  }

}