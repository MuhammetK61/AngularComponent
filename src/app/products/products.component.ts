import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {id:1, name: 'Mininalist Analog Watch', price: '109', color: 'Black', available: 'Available', image: 'https://picsum.photos/50/300'},
    {id:2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: 'https://picsum.photos/60/300'},
    {id:3, name: 'Apple iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: 'https://picsum.photos/70/300'},
    {id:4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'White', available: 'Available', image: 'https://picsum.photos/80/300'},
    {id:5, name: 'LG Refrigerator with Door Cooling', price: '2815', color: 'White', available: 'Not Available', image: 'https://picsum.photos/90/300'},
    {id:6, name: 'DELL Insprion One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available', image: 'https://picsum.photos/150/300'}
  ];


}
