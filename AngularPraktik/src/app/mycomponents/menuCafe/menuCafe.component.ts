import { Component, Input } from '@angular/core'
import { IMenuCafe } from '../../models/menuCafeInterface'

@Component({
  selector: 'app-menuCafe',
  templateUrl: './menuCafe.component.html'
})
export class MenuCafe {
  ShowContent = false;
  @Input()
  Dishes!: IMenuCafe

}

