import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Tandoori Roti',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img1.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:2,
        name:'Butter Nons',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img2.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:3,
        name:'Frypiece Biryani',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img3.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:4,
        name:'Double chese Pizza',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img4.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:5,
        name:'Milk Cake',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img5.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:6,
        name:'Cup Cakes',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img6.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:7,
        name:'Corn Pizza',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img7.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:8,
        name:'Pan Cakes',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img8.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:9,
        name:'Chicken Megistics',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img9.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:10,
        name:'ramen',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img10.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:11,
        name:'Noodels',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img11.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:12,
        name:'SandWchich',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img12.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:13,
        name:'Fish Fry',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img13.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:14,
        name:'Soba Noodels',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img14.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:15,
        name:'Daal Tadka',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img15.jpg',
        tags: ['FastFood','Pizza']
      },
      {
        id:16,
        name:'Samosa',
        cookTime:'Cook Time 10-20',
        price:300,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/img16.jpg',
        tags: ['FastFood','Pizza']
      }
      
    ];  
  }
}
