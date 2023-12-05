import { Component, OnInit, ViewChild } from '@angular/core';
import { IMenuCafe } from '../models/menuCafeInterface';
import { MenuCafeService } from '../services/menuCafe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  Dish:any = undefined;
  Dishes: IMenuCafe[] = []
  ifReady: boolean = false;
  constructor(private menuCafeService: MenuCafeService) {

  }

  ngOnInit(): void {
    this.menuCafeService.getAll().subscribe(Dishes => {
      this.Dishes = Dishes
      console.log(Dishes)
      console.log(this.Dishes)
      this.ifReady = true;
    })
    console.log(this.Dishes)
  }

  ShowDish(dish: IMenuCafe): void {
    this.Dish = dish;
  }
}
