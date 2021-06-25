import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {subscribeOn} from "rxjs/operators";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url = "https://jsonplaceholder.typicode.com/users";

  form: FormGroup;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder, public http: HttpClient
  ) {
    this.form = formBuilder.group({
      loginID: [''],
      loginPW: ['']
    });
  }

  ngOnInit(): void {
    this.http.get(this.url).pipe().subscribe(
      res =>
      {
        console.log(res);
      });

  }

  Login(): void {
    console.log(this.form.value["loginID"]);
    console.log(this.form.value["loginPW"]);
  }

}
