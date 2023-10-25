import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  city: string = 'Shibīn al Kawm'
  units: string = 'metric'
  //apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${this.units}`
  
  constructor(private http: HttpClient) { }

  getWeather(city: string = this.city) {
    return this.http.get(`${environment.apiUrl}?q=${city}&appid=${environment.apiKey}&units=${this.units}`)
  }
}
