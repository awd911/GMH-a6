import { Component, OnInit } from '@angular/core';
import {AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {HotToastService} from "@ngneat/hot-toast";
import {Router} from "@angular/router";


export function passwordsMatchValidator(): ValidatorFn {
  return(control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword){
      return {
        passwordsDontMatch : true
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new UntypedFormGroup({
    name: new UntypedFormControl('',Validators.required),
    email: new UntypedFormControl('',[Validators.email,Validators.required]),
    password: new UntypedFormControl('',Validators.required),
    confirmPassword: new UntypedFormControl('',Validators.required)
  }, {validators: passwordsMatchValidator()})

  constructor(
    private authService: AuthenticationService,
    private toast: HotToastService,
    private router:Router) { }

  ngOnInit(): void {
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }


  submit() {
    if (!this.signUpForm.valid){
      return;
    }

    const { name, email, password} = this.signUpForm.value;

    this.authService.signUp(name,email,password).pipe(
      this.toast.observe({
        success: 'Congrats! You are Signed Up!',
        loading: 'Signing up...',
        error:({ message }) => `${message}`
      })
    ).subscribe(() =>{
        this.router.navigate(['./home']);
      });
  }
}
