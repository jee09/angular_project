import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  // 안쓰지만, url 비우면 안되서 일단 구색 맞춰놓기
  url = "https://jsonplaceholder.typicode.com/users";

  constructor(public http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void
  {
  }

  PageRedirect(): void
  {
    this.router.navigate(['/', 'login']).then(res => {
      console.log("로그인으로 다시 이동 (여기는 쿠키를 활용해서 움직이지롱 SPA에 대해서 알아보기)");
    });

    this.http.get(this.url).pipe().subscribe(res => { console.log("통신 scope"); });
  }
}
