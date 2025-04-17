import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  constructor() { }

  mobiles = [
    {id:1, name:'S25 Ultra', brand:'Samsung', price:'152000'},
    {id:2, name:'iPhone 15', brand:'Apple', price:'123700'},
    {id:3, name:'13 Pro', brand:'Xiaomi', price:'63125'},
    {id:4, name:'GT 13 Pro', brand:'Realme', price:'34999'},
    {id:5, name:'Zenfone Max', brand:'Asus', price:'18999'},
    {id:5, name:'Phone 1', brand:'CMF by Nothing', price:'13999'},
    {id:5, name:'Edge 60', brand:'Motorola', price:'21999'},
  ]

}
