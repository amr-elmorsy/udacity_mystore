import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalValue = 0;
  fullName = '';
  address = '';
  crNumber = '';

  cart: IProduct[] = [];

  constructor(private prodServ: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.prodServ.getCartProducts().subscribe(data => {
      this.cart = data;
      this.CartChanged();
    })
  }

  onSubmit() {
    this.prodServ.totalValue = this.totalValue;
    this.prodServ.fullName = this.fullName;
    this.prodServ.address = this.address;
    this.prodServ.crNumber = this.crNumber;
    this.router.navigate(['/confirmation']);
  }

  countChanged(product: IProduct) {
    if ((product.count || 0) <= 0) {
      this.cart = this.cart.filter(item => item.id != product.id);
    }

    this.CartChanged();
  }

  CartChanged() {
    this.totalValue = 0;
    this.cart.forEach(item => {
      this.totalValue += ((item.count || 0) * item.price);
    });
  }
}
