import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      loginID: [''],
      loginPW: ['']
    });


  }

  ngOnInit(): void {
  }

  Login(): void {

    console.log(this.form.value["loginID"]);
    console.log(this.form.value["loginPW"]);

  }

}
