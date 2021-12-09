import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'Samsung Galaxy',
    price: 12000000,
    description: 'New'
  }, {
    id: 2,
    name: 'Samsung Pro',
    price: 15000000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'Samsung Plus',
    price: 18000000,
    description: '97%'
  }, {
    id: 4,
    name: 'Samsung Note',
    price: 20000000,
    description: '98%'
  }, {
    id: 5,
    name: 'Samsung 12',
    price: 19000000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
}
