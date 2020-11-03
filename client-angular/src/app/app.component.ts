import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  obs: Observable<object>;
  private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.obs=this.http.get('https://3000-a928336b-f559-4e82-95bc-380ead69356d.ws-eu01.gitpod.io/api');
      this.obs.subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
      });
    }
}
