import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { IMenuCafe } from '../../models/menuCafeInterface'
import { MenuCafeService } from '../../services/menuCafe.service'


@Component({
  standalone: true,
  selector: "app-modalCafe",
  templateUrl: "./modalCafe.component.html",
  imports: [ReactiveFormsModule, CommonModule],
})
export class ModalCafe {
  constructor(private menuCafeService: MenuCafeService) {

  }

   ModalCafeForm = new FormGroup({
     "nameForm": new FormControl("Ponzu Tofu", Validators.required),
     "priceForm": new FormControl<number>(10, [Validators.required, Validators.min(1)]),
    "imageForm": new FormControl("https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400",Validators.required),
    "sectionForm" : new FormControl("Tofu", Validators.required),
    "veganForm" : new FormControl<boolean>(true, Validators.required),
    "childForm" : new FormControl<boolean>(false, Validators.required),
   });

  Dishes: Array<IMenuCafe> = new Array<IMenuCafe>
  submit() {
    const nameForm = this.ModalCafeForm.value.nameForm;
    const priceForm = this.ModalCafeForm.value.priceForm;
    const imageForm = this.ModalCafeForm.value.imageForm;
    const sectionForm = this.ModalCafeForm.value.sectionForm;
    const veganForm = this.ModalCafeForm.value.veganForm;
    const childForm = this.ModalCafeForm.value.childForm;
    this.Dishes = [{ name: nameForm!, price: +priceForm!, childrenMenu: childForm!, image: imageForm!, section: sectionForm!, vegan: veganForm! }]
    this.menuCafeService.postDB(this.Dishes).subscribe();
    window.location.reload()
    console.log(this.Dishes)
  }
};
