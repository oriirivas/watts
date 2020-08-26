import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../products/productsModel';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productsTwo: ProductModel;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.productsTwo.id);
}

}
