import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Item } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  quantityArr = new Array(10)

  @Output()
  onAddItem = new Subject<Item>()

  @Input()
  item!: Item

  itemForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
    name: this.fb.control(this.item?.name),
    unitPrice: this.fb.control(this.item?.unitPrice),
    quantity: this.fb.control(this.item?.quantity)
    })
  }

  processForm(){
    console.info(">>>>Add button clicked")
    console.info(">>>>> itemForm: ",this.itemForm.value)
    const itemToAdd: Item = this.itemForm.value as Item

    this.onAddItem.next(itemToAdd)

    this.itemForm.reset()
  }

}
