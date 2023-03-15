import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  items:CartItem[]=[];
  price!: number ;
  quantity!: number ;
  rzp1: any;
  productQuantity:number=1;
  id: any;
  constructor(private cartService: CartService , private router:Router ,private foodService:FoodService 
    ) {
     this.setCart();
    
   }
  ngOnInit(): void {

  }
  setCart() {
    this.cart = this.cartService.getCart();

  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
    alert("Item is removed from your cart")
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();

  }
  get totalPrice():number{
     let totalPrice = 0;
    this.items.forEach(item =>{
      totalPrice =+ item.price * item.quantity
    });
    return totalPrice;
}
//payment gateway 
options = {
  "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
  "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Acme Corp", //your business name
  "description": "Test Transaction",
  "image": "https://example.com/your_logo",
  "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  "prefill": {
      "name": "Gaurav Kumar", //your customer's name
      "email": "gaurav.kumar@example.com",
      "contact": "9000090000"
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#3399cc"
  }
};

pay(){
 this.rzp1 = new this.cartService.nativeWindow.Razorpay(this.options);
 this.rzp1.open();
}

setQuantity(value:string){
  if(this.productQuantity < 9 && value=="max"){
    this.productQuantity +=1;
  }else if(this.productQuantity >1 && value=="min"){
    this.productQuantity -=1;
  }
}

calculateTotalValuue(){
  let totalAmount:number=0;
  let totalQuantity:number=0;
}

  // addToCart(){
  //   this.cartService.addToCart(this.food);
  //   this.router.navigateByUrl('/cart-page');
  // }
}
 
