import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data = {};

  
  constructor(private http: HttpClient)
  {
    this.http.get("https://cailiming-dockerangular-ez5p3t0ydsl.ws-eu107.gitpod.io//simple_json")
    .subscribe(
      (data: any) => this.data = data
    )
  }


}
