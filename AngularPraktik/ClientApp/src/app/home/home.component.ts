import { Component, OnInit, ViewChild } from '@angular/core';
import { IMenuCafe } from '../models/menuCafeInterface';
import { MenuCafeService } from '../services/menuCafe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  Dish:any = undefined;
  Dishes: Array<IMenuCafe> = new Array<IMenuCafe>;
  ifReady: boolean = false;
  constructor(private menuCafeService: MenuCafeService) {

  }

  loggedIn: boolean = sessionStorage.getItem("loggedIn") === "true" ? true : false;
  role: string | null = sessionStorage.getItem("role");
  ngOnInit(): void {
    this.menuCafeService.getAllDB().subscribe(Dishes => {
      this.Dishes = Dishes
      console.log(Dishes)
      console.log(this.Dishes)
      this.ifReady = true;
    })
    console.log(this.Dishes)
    if (localStorage.getItem("token") != null) {
      this.menuCafeService.resolveToken(localStorage.getItem("token")!).subscribe(response => {
        console.log(response)
        sessionStorage.setItem("login", response.login)
        sessionStorage.setItem("role", response.role)
        console.log(this.role)
        sessionStorage.setItem("loggedIn", "true")
      }, (error) => {
        console.log(error)
        sessionStorage.removeItem('login')
        sessionStorage.removeItem('role')
        console.log(this.role)
        sessionStorage.removeItem('loggedIn')
        if (this.loggedIn != false) {
          window.location.reload()
        }
      })
    }
  }

  ShowDish(dish: IMenuCafe): void {
    this.Dish = dish;
  }
}
