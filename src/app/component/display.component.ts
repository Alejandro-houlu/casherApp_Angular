import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input()
  cart!: Item[]

  @Input()
  total!:number

  @Output()
  onItemDelete = new Subject<number>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(idx: number){
    console.info(">>>>>Item to delete: Index = ",idx)
    this.onItemDelete.next(idx)
    
  }

}
