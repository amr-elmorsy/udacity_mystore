import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private prodServ: ProductsService) { }

  ngOnInit(): void {
    this.prodServ.getProducts().pipe(
      map((products: IProduct[]) => products.map(product => { product.count = product.count ? product.count : 1; return product; }))
    ).subscribe(data => {
      this.products = data;
    });
  }

  productCountChanged(event:IProduct){
     
  }
}
