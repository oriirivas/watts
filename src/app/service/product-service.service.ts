import { Injectable } from '@angular/core';
import { ProductModel } from '../components/products/productsModel';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  products: ProductModel[] = [
    {
      id: '1',
      image: 'assets/img/products/orange-juice.png',
      title: 'Polera de Mujer You',
      price: 15000,
      description: 'nice for be cool in the summer',
      type: 'bebida'
    },
    {
      id: '2',
      image: 'assets/img/products/orange-juice.png',
      title: 'Polera de Mujer You',
      price: 15000,
      description: 'nice for be cool in the summer',
      type: 'bebida'
    },
    {
      id: '3',
      image: 'assets/img/products/orange-juice.png',
      title: 'Polera de Mujer You',
      price: 15000,
      description: 'nice for be cool in the summer',
      type: 'bebida'
    },
    {
      id: '4',
      image: 'assets/img/products/orange-juice.png',
      title: 'Polera de Mujer You',
      price: 15000,
      description: 'nice for be cool in the summer',
      type: 'bebida'
    },
    {
      id: '5',
      image: 'assets/img/products/orange-juice.png',
      title: 'Polera de Mujer You',
      price: 15000,
      description: 'nice for be cool in the summer',
      type: 'bebida'
    }

  ];
}
