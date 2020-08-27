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
      price: 1050,
      description: '1lt',
      type: 'bebida'
    },
    {
      id: '1',
      image: 'assets/img/products/mermeladaDurazno.jpg',
      title: 'Mermelada de Durazno',
      price: 820,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '2',
      image: 'assets/img/products/belmont.jpg',
      title: 'Aceite Belmont',
      price: 2400,
      description: '1lt',
      type: 'aceite'
    },
    {
      id: '3',
      image: 'assets/img/products/carbonada.jpg',
      title: 'Conserva de Carbonada',
      price: 1790,
      description: '380gr',
      type: 'conserva'
    },
    {
      id: '4',
      image: 'assets/img/products/choclo.jpg',
      title: 'Conserva de Choclo',
      price: 950,
      description: '380gr',
      type: 'conserva'
    },
    {
      id: '5',
      image: 'assets/img/products/conservaDurazno.jpg',
      title: 'Conserva de Durazno',
      price: 790,
      description: '500gr',
      type: 'Conserva'
    },
    {
      id: '6',
      image: 'assets/img/products/conservaFrutilla.jpg',
      title: 'Conserva de Frutilla',
      price: 1480,
      description: '410gr',
      type: 'Conserva'
    },
    {
      id: '7',
      image: 'assets/img/products/fullPro.jpg',
      title: 'Proteina FullPro',
      price: 1390,
      description: '330ml',
      type: 'lacteos'
    },
    {
      id: '8',
      image: 'assets/img/products/girasolChef.jpg',
      title: 'Aceite Girason Chef',
      price: 1600,
      description: '1lt',
      type: 'Aceite'
    },
    {
      id: '9',
      image: 'assets/img/products/jugoArandano.jpg',
      title: 'Jugo de Arandano',
      price: 4000,
      description: '1lt',
      type: 'bebida'
    },
    {
      id: '10',
      image: 'assets/img/products/jugoBotella.jpg',
      title: 'Jugo de Botella',
      price: 560,
      description: '300ml',
      type: 'bebida'
    },
    {
      id: '11',
      image: 'assets/img/products/jugoFrambuesa.jpg',
      title: 'Jugo de Frambuesa Selección',
      price: 3100,
      description: '1,75lt',
      type: 'bebida'
    },
    {
      id: '12',
      image: 'assets/img/products/jugoLightCaja.jpg',
      title: 'Jugo de Naranja Light',
      price: 1050,
      description: '1lt',
      type: 'bebida'
    },
    {
      id: '13',
      image: 'assets/img/products/jugoNaranja.jpg',
      title: 'Jugo de Naranja Selección',
      price: 3350,
      description: '1,75lt',
      type: 'bebida'
    },
    {
      id: '14',
      image: 'assets/img/products/lecheAlmendra.jpg',
      title: 'Leche de Almendra',
      price: 2600,
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
      price: 1050,
      description: '380gr',
      type: 'conserva'
    },
    {
      id: '17',
      image: 'assets/img/products/maizChef.jpg',
      title: 'Aceite de maiz Chef',
      price: 3200,
      description: '1lt',
      type: 'aceite'
    },
    {
      id: '18',
      image: 'assets/img/products/mantequillaLasParcelas.jpg',
      title: 'Mantequilla Las Parcelas',
      price: 2200,
      description: '250gr',
      type: 'lacteos'
    },
    {
      id: '19',
      image: 'assets/img/products/mantequillaLoncoLeche.jpg',
      title: 'Mantequilla Loncoleche',
      price: 2130,
      description: '250gr',
      type: 'lacteos'
    },
    {
      id: '20',
      image: 'assets/img/products/mantequillaSureña.jpg',
      title: 'Margarina Sureña Mix',
      price: 2100,
      description: '500gr',
      type: 'lacteos'
    },
    {
      id: '21',
      image: 'assets/img/products/membrillo.jpg',
      title: 'Membrillo',
      price: 2100,
      description: '1kg',
      type: 'mermelada'
    },
    {
      id: '22',
      image: 'assets/img/products/mermeladaDamasco.jpg',
      title: 'Mermelada Doypack de Damasco',
      price: 1400,
      description: '400gr',
      type: 'mermelada'
    },
    {
      id: '23',
      image: 'assets/img/products/mermeladaDurazno.jpg',
      title: 'Mermelada Durazno',
      price: 820,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '24',
      image: 'assets/img/products/mermeladaFrutilla.jpg',
      title: 'Mermelada de Frutilla',
      price: 820,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '25',
      image: 'assets/img/products/mermeladaFrutos.jpg',
      title: 'Mermelada de frutos del bosque',
      price: 820,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '26',
      image: 'assets/img/products/mermeladaLight.jpg',
      title: 'Mermelada de Durazno Light',
      price: 1890,
      description: '350gr',
      type: 'mermelada'
    },
    {
      id: '27',
      image: 'assets/img/products/mermeladaLightFrutos.jpg',
      title: 'Mermelada de Berries Light',
      price: 1890,
      description: '350gr',
      type: 'mermelada'
    },
    {
      id: '28',
      image: 'assets/img/products/mermeladaSandia.jpg',
      title: 'Mermelada de Alcayota Light',
      price: 990,
      description: '250gr',
      type: 'mermelada'
    },
    {
      id: '29',
      image: 'assets/img/products/mermeladaSinAzucar.jpg',
      title: 'Mermelada Damasco Sin Azucar',
      price: 1050,
      description: '200gr',
      type: 'mermelada'
    },
    {
      id: '30',
      image: 'assets/img/products/olivaChef.jpg',
      title: 'Aceite de Oliva Chef',
      price: 5690,
      description: '1lt',
      type: 'aceite'
    },
    {
      id: '31',
      image: 'assets/img/products/porotosBlancos.jpg',
      title: 'Porotos Granados',
      price: 1790,
      description: '380gr',
      type: 'conserva'
    },
    {
      id: '32',
      image: 'assets/img/products/proteina.jpg',
      title: 'Leche Extra Proteina',
      price: 1550,
      description: '1lt',
      type: 'lacteos'
    },
    {
      id: '33',
      image: 'assets/img/products/proteinaChocolate.jpg',
      title: 'Lechce Proteina Chocolate',
      price: 1450,
      description: '1lt',
      type: 'lacteos'
    },
    {
      id: '34',
      image: 'assets/img/products/yogurtProteina.jpg',
      title: 'Yogurt Protein',
      price: 420,
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
