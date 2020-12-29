import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-http-client-demo';
  
  httpdata;
  constructor(private http : HttpClient) {}

  ngOnInit() {
    //this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((rec) => console.log(rec));
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((rec) => this.displayrecord(rec));
  }

  displayrecord(rec){
    this.httpdata = rec;
  }

}
