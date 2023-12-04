import { Component } from '@angular/core';
import { IOfficeAccessories } from '../models/officeAccessoriesInterface'
import { officeAccessories as mydata } from '../data/officeAccessories'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  officeAccessories: IOfficeAccessories[] = mydata;
}
