import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  city: string = 'Shibīn al Kawm'
  apiKey: string = 'a8ef68136c1c408c86a496bf3253eb3d'
  units: string = 'metric'
  //apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${this.units}`
  
  constructor(private http: HttpClient) { }

  getWeather(city: string = this.city) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=${this.units}`)
  }
}
