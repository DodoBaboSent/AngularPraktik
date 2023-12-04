import { Component, Input } from '@angular/core'
import { IOfficeAccessories } from '../../models/officeAccessoriesInterface'

@Component({
  selector: 'app-officeAccessories',
  templateUrl: './officeAccessories.component.html'
})
export class OfficeAccessories {
  @Input()
  officeAccessories!:IOfficeAccessories
}
