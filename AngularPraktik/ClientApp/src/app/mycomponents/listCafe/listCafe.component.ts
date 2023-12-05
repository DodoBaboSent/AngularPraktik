import { Component, EventEmitter, Input, Output } from '@angular/core'
import { IMenuCafe } from '../../models/menuCafeInterface'

@Component({
  selector: 'app-listCafe',
  templateUrl: './listCafe.component.html'
})
export class ListCafe {
  displayItem(Show: boolean): void {
    this.DishEvent.emit(this.Dishes)
    this.ShowContent = !this.ShowContent
  }

  ShowContent = false;
  @Output()
  DishEvent = new EventEmitter<IMenuCafe>();

  @Input()
  Dishes!: IMenuCafe

}

