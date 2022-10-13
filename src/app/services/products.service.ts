import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { of, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _jsonURL = 'assets/data.json';
  public cart: IProduct[] = [];

  public totalValue = 0;
  public fullName = '';
  public address = '';
  public crNumber = '';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._jsonURL);
  }

  getCartProducts(): Observable<IProduct[]> {
    return of(this.cart);
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }

  addProductToCart(product: IProduct) {
    this.cart.push(product);
    alert("Product added..");
  }

}
