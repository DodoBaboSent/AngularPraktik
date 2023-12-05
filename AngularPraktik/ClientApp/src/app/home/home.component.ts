import { Component, ViewChild } from '@angular/core';
import { IMenuCafe } from '../models/menuCafeInterface'
import { MenuCafe as mydata } from '../data/menuCafe'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Dishes: IMenuCafe[] = mydata;
  Dish:any = undefined;

  ShowDish(dish: IMenuCafe): void {
    this.Dish = dish;
  }
}
