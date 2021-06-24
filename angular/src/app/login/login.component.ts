import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, FormBuilder} from '@angular/forms';
import {Inject} from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void
  {
  }

  // form: FormGroup;
  //
  // constructor(@Inject(FormBuilder) formBuilder: FormBuilder,
  //             private router: Router,
  //             private route: ActivatedRoute,
  //             public _location: Location)
  //
  // {
  //   this.form = formBuilder.group({
  //     loginID: [''],
  //     loginPW: ['']
  //   });
  //   let id = this.form.value["loginID"];
  //   console.log(id);
  //
  // }
  //
  // Login() : void
  // {
  //   let id = this.form.value["loginID"];
  //   let pw = this.form.value["loginPW"];
  //   console.log(id + ", " + pw);
  // }
}
