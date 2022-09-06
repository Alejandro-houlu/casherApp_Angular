import { Component } from '@angular/core';
import { Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casherApp';

  cart: Item[] = []
  total = 0.0

  newItemAdd(item: Item){
    console.info(">>>>> new item: ",item)
    this.cart.push(item)
    console.info(this.cart)
    this.calculateTotal()
  }

  private calculateTotal(){

  this.total = this.cart.reduce((acc,obj)=>acc + (obj.quantity * obj.unitPrice),0)

  }

  itemDelete(idx:number){
    this.cart.splice(idx,1)
    this.calculateTotal()
  }
}
