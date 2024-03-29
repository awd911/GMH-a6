import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { HotToastService } from '@ngneat/hot-toast';
import {AuthenticationService} from "../../services/authentication.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('',[Validators.required, Validators.email]),
    password: new UntypedFormControl('',[Validators.required])
  })

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  submit() {
    if(!this.loginForm.valid){
      return;
    }
    const { email,password } = this.loginForm.value;
    this.authService.login(email,password).pipe(
      this.toast.observe({
        success:"Login Successful",
        loading:"Logging in...",
        error:"An Error has occured"
      })

    ).subscribe(()=>{
      this.router.navigate(['./home']);
    });
  }
}
