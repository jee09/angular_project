import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url = "https://jsonplaceholder.typicode.com/users";

  form: FormGroup;
  public name = '';

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder,
              public http: HttpClient,
              private router: Router,
              private route: ActivatedRoute)
  {
    this.form = formBuilder.group({
      loginID: [''],
      loginPW: ['']
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
    {
      this.name = params['info'];
      console.log(this.name);
    });
  }

  Login(): void {
    console.log(this.form.value["loginID"]);
    console.log(this.form.value["loginPW"]);

    this.http.get(this.url).pipe().subscribe(
      res =>
      {
        this.router.navigate(['/', 'info']).then(r =>
        {
          console.log("res", res);
        });
      });
  }

}
