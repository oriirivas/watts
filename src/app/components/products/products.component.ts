import { Component, OnInit } from '@angular/core';
import { ProductModel } from './productsModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public type = 'Todos';
  public productListFilter: ProductModel[];
  public carNumber = 0
  constructor() { }

  productsList: ProductModel[] = [
    {
      id: '0',
      image: 'assets/img/products/orange-juice.png',
      title: 'Nectar de Naranja',
      price: 15000,
      description: '1lt',
      type: 'bebida'
    },
    {
      id: '1',
      image: 'assets/img/products/mermeladaDurazno.jpg',
      title: 'Mermelada de Durazno',
      price: 15000,
      description: 'Deliciosa y saludable',
      type: 'mermelada'
    },
    {
      id: '2',
      image: 'assets/img/products/belmont.jpg',
      title: 'Aceite Belmont',
      price: 15000,
      description: '1lt',
      type: 'aceite'
    },
    {
      id: '3',
      image: 'assets/img/products/carbonada.jpg',
      title: 'Conserva de Carbonada',
      price: 15000,
      description: '800gr',
      type: 'conserva'
    },
    {
      id: '4',
      image: 'assets/img/products/choclo.jpg',
      title: 'Conserva de Choclo',
      price: 15000,
      description: '800gr',
      type: 'conserva'
    },
    {
      id: '5',
      image: 'assets/img/products/conservaDurazno.jpg',
      title: 'Conserva de Durazno',
      price: 15000,
      description: '800gr',
      type: 'Conserva'
    },
    {
      id: '6',
      image: 'assets/img/products/conservaFrutilla.jpg',
      title: 'Conserva de Frutilla',
      price: 15000,
      description: '800gr',
      type: 'Conserva'
    },
    {
      id: '7',
      image: 'assets/img/products/fullPro.jpg',
      title: 'Proteina FullPro',
      price: 15000,
      description: '600ml',
      type: 'lacteos'
    },
    {
      id: '8',
      image: 'assets/img/products/girasolChef.jpg',
      title: 'Aceite Girason Chef',
      price: 15000,
      description: '1lt',
      type: 'Aceite'
    },
    {
      id: '9',
      image: 'assets/img/products/jugoArandano.jpg',
      title: 'Jugo de Arandano',
      price: 15000,
      description: '1lt',
      type: 'bebida'
    },
    {
      id: '10',
      image: 'assets/img/products/jugoBotella.jpg',
      title: 'Jugo de Botella',
      price: 15000,
      description: '400ml',
      type: 'bebida'
    },
    {
      id: '11',
      image: 'assets/img/products/jugoFrambuesa.jpg',
      title: 'Jugo de Frambuesa',
      price: 15000,
      description: '1lt',
      type: 'bebida'
    },
    {
      id: '12',
      image: 'assets/img/products/jugoLightCaja.jpg',
      title: 'Jugo de Light',
      price: 15000,
      description: '1lt',
      type: 'bebida'
    },
    {
      id: '13',
      image: 'assets/img/products/jugoNaranja.jpg',
      title: 'Jugo de Naranja',
      price: 15000,
      description: '1lt',
      type: 'bebida'
    },
    {
      id: '14',
      image: 'assets/img/products/lecheAlmendra.jpg',
      title: 'Leche de Almendra',
      price: 15000,
      description: '1lt',
      type: 'lacteos'
    },
    {
      id: '15',
      image: 'assets/img/products/lecheDescremada.jpg',
      title: 'Leche Descremada',
      price: 15000,
      description: '1lt',
      type: 'lacteos'
    },
    {
      id: '16',
      image: 'assets/img/products/lentejas.jpg',
      title: 'Lentejas',
      price: 15000,
      description: '300gr',
      type: 'conserva'
    },
    {
      id: '17',
      image: 'assets/img/products/maizChef.jpg',
      title: 'Aceite de maiz Chef',
      price: 15000,
      description: '1lt',
      type: 'aceite'
    },
    {
      id: '18',
      image: 'assets/img/products/mantequillaLasParcelas.jpg',
      title: 'Mantequilla Las Parcelas',
      price: 15000,
      description: '250gr',
      type: 'lacteos'
    },
    {
      id: '19',
      image: 'assets/img/products/mantequillaLoncoLeche.jpg',
      title: 'Mantequilla Loncoleche',
      price: 15000,
      description: '250gr',
      type: 'lacteos'
    },
    {
      id: '20',
      image: 'assets/img/products/mantequillaSureña.jpg',
      title: 'Mantequilla Sureña',
      price: 15000,
      description: '250gr',
      type: 'lacteos'
    },
    {
      id: '21',
      image: 'assets/img/products/membrillo.jpg',
      title: 'Membrillo',
      price: 15000,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '22',
      image: 'assets/img/products/mermeladaDamasco.jpg',
      title: 'Mermelada de Damasco',
      price: 15000,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '23',
      image: 'assets/img/products/mermeladaDurazno.jpg',
      title: 'Mermelada Durazno',
      price: 15000,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '24',
      image: 'assets/img/products/mermeladaFrutilla.jpg',
      title: 'Mermelada de Frutilla',
      price: 15000,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '25',
      image: 'assets/img/products/mermeladaFrutos.jpg',
      title: 'Mermelada de frutos del bosque',
      price: 15000,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '26',
      image: 'assets/img/products/mermeladaLight.jpg',
      title: 'Mermelada Light',
      price: 15000,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '27',
      image: 'assets/img/products/mermeladaLightFrutos.jpg',
      title: 'Mermelada Light Frutos',
      price: 15000,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '28',
      image: 'assets/img/products/mermeladaSandia.jpg',
      title: 'Mermelada de Alcayota',
      price: 15000,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '29',
      image: 'assets/img/products/mermeladaSinAzucar.jpg',
      title: 'Mermelada Sin Azucar',
      price: 15000,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '30',
      image: 'assets/img/products/olivaChef.jpg',
      title: 'Aceite de Oliva Chef',
      price: 15000,
      description: '1lt',
      type: 'aceite'
    },
    {
      id: '31',
      image: 'assets/img/products/porotosBlancos.jpg',
      title: 'Porotos Granados',
      price: 15000,
      description: '250gr',
      type: 'conserva'
    },
    {
      id: '32',
      image: 'assets/img/products/proteina.jpg',
      title: 'Leche con Proteina',
      price: 15000,
      description: '1lt',
      type: 'lacteos'
    },
    {
      id: '33',
      image: 'assets/img/products/proteinaChocolate.jpg',
      title: 'Proteina de Chocolate',
      price: 15000,
      description: '1lt',
      type: 'lacteos'
    },
    {
      id: '34',
      image: 'assets/img/products/yogurtProteina.jpg',
      title: 'Yogurt Protein',
      price: 15000,
      description: '140gr',
      type: 'lacteos'
    }

  ];

  ngOnInit(): void {
    this.setType(this.type)
  }

  clickProduct(id: number) {
    this.carNumber++;
    console.log('prodcuto numero' + ' ' + id);
  }
  setType(value: any) {
    this.productListFilter = [];
    this.type = value;
    console.log(value);
    if(value === 'Todos'){
      this.productListFilter = this.productsList;
    } else {
      this.productsList.forEach(element => {
        if ( element.type === value) {
          this.productListFilter.push(element);
        }
      });
      console.log(this.productListFilter);
    }
    }
}
