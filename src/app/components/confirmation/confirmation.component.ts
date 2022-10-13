import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  totalValue = 0;
  fullName = '';

  constructor(private prodServ: ProductsService) { }

  ngOnInit(): void {
    this.totalValue = this.prodServ.totalValue;
    this.fullName = this.prodServ.fullName;
  }

  isValidData() {
    return !(
      this.prodServ.fullName === ''
      || this.prodServ.address === ''
      || this.prodServ.cart.length <= 0)
  }

}
