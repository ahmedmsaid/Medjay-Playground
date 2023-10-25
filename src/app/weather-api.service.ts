import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  city: string = 'Shibīn al Kawm'
  units: string = 'metric'
  
  constructor(private http: HttpClient) { }

  getWeather(city: string = this.city) {
    return this.http.get(`${environment.apiUrl}?q=${city}&appid=${environment.apiKey}&units=${this.units}`)
  }
}
