import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() activeIndex = new EventEmitter<number>();

  value: string | undefined;
  registerForm?: FormGroup;
  passwordShowType = "password";
  passwordRepeatShowType = "password";

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(form?: FormGroup){
    console.log("valid", form?.valid);
    console.log("phone number", form?.value.phoneNumber);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const {NewPassword, ConfirmNewPassword} = control.value;
    if (NewPassword === ConfirmNewPassword) {
      return null;
    } else {
      return {mustMatch: true};
    }
  }

  createForm(){
    this.registerForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordRepeat: ['', Validators.required]
    }, {validators: this.validate});
  }



  onShowPassword(){
    if (this.passwordShowType === 'password'){
      this.passwordShowType = "text"
    } else {
      this.passwordShowType = "password"
    }
  }

  onShowPasswordRepeat(){
    if (this.passwordRepeatShowType === 'password'){
      this.passwordRepeatShowType = "text"
    } else {
      this.passwordRepeatShowType = "password"
    }
  }


  onSubmitRegister(){
    const submitBtn = document.getElementsByClassName("submit-register-btn");

    if(this.registerForm?.valid){
      submitBtn[0].removeAttribute('disabled')
      this.activeIndex.emit(1)
    } else {
      submitBtn[0].setAttribute('disabled', 'disabled');
    }
  }
}
