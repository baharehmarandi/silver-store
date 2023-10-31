import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-number-confirmation',
  templateUrl: './number-confirmation.component.html',
  styleUrls: ['./number-confirmation.component.scss']
})
export class NumberConfirmationComponent implements OnInit {

  codeInputForm?: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.codeForm();
  }

  codeForm(){
    this.codeInputForm = this.fb.group({
      inputCode1: ['', [Validators.required, Validators.pattern('[0-9]')]],
      inputCode2: ['', [Validators.required, Validators.pattern('[0-9]')]],
      inputCode3: ['', [Validators.required, Validators.pattern('[0-9]')]],
      inputCode4: ['', [Validators.required, Validators.pattern('[0-9]')]],
      inputCode5: ['', [Validators.required, Validators.pattern('[0-9]')]],
      inputCode6: ['', [Validators.required, Validators.pattern('[0-9]')]]
    })
  }
}
