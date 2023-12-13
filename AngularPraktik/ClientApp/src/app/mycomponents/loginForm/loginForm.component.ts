import { CommonModule } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuCafeService } from "../../services/menuCafe.service";


@Component({
  selector: "app-loginForm",
  templateUrl: "./loginForm.component.html",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginForm {
  constructor(private menuCafeService: MenuCafeService, private router: Router) {

  }
  
  LoginFormGroup = new FormGroup({
    "usernameForm": new FormControl<string>("admin", Validators.required),
    "passwordForm": new FormControl<string>("admin", Validators.required),
  })
  errMsg: { msg: string, isErr: boolean } = { msg: 'no error', isErr: false }
  success: boolean = false;
  submit() {
    const username = this.LoginFormGroup.controls.usernameForm.value!;
    const password = this.LoginFormGroup.controls.passwordForm.value!;
    console.log(username)
    console.log(password)
    this.menuCafeService.loginUser(username!, password!).subscribe(Token => {
      console.log(Token)
      const TokenStr = JSON.stringify(Token)
      const Parsed: { access_token: string, username: string } = JSON.parse(TokenStr)
      console.log(Parsed)
      localStorage.setItem("username", Parsed.username);
      localStorage.setItem("token", Parsed.access_token);
      this.success = true;
    }, (errMsg: HttpErrorResponse) => {
      this.errMsg = { msg: errMsg.error.errorText, isErr: true }
      console.log(errMsg)
      this.success = false;
    });
  }
}
