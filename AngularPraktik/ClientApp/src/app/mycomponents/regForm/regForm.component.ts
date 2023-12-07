import { CommonModule } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Person } from "../../models/personClass";
import { MenuCafeService } from "../../services/menuCafe.service";


@Component({
  selector: "app-regForm",
  templateUrl: "./regForm.component.html",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class RegForm {
  constructor(private menuCafeService: MenuCafeService, private router: Router) {

  }
  persReg: Person = new Person();
  RegFormGroup: FormGroup = new FormGroup({
    "usernameForm": new FormControl<string>("admin", Validators.required),
    "passwordForm": new FormControl<string>("admin", Validators.required),
  })
  errMsg: { msg: string, isErr: boolean } = { msg: 'no error', isErr: false }
  submit() {
    const login = this.RegFormGroup.controls.usernameForm.value;
    const password = this.RegFormGroup.controls.passwordForm.value;
    this.persReg = { login: login!, password: password!, role: 'user' };
    this.menuCafeService.regUser(this.persReg).subscribe(() => { this.router.navigate(['/login']) },
      (msgErr: HttpErrorResponse) => {
        this.errMsg = { msg: msgErr.error, isErr: true! }
        console.log(this.errMsg)
      })
    }
  }

