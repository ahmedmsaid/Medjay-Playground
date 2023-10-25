import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherAPIService } from '../weather-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  weather: any = ''
  imgUrl: string = ''
  pageLoaded: boolean = false;

  constructor(private weatherService: WeatherAPIService){}

  ngOnInit(): void {
    let observer = {
      next: (res: any) => {
        this.weather = res;
        console.log(this.weather)
        this.imgUrl = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
      },
      error: (err: any) => console.log(err.message)
      ,
      complete: () => {
        console.log('API Called Successfully')
        this.pageLoaded = true;
      }
    }
    let weatherSub = this.weatherService.getWeather().subscribe(observer);
    this.subs.push(weatherSub);
  }

  ngOnDestroy(): void {
    for(let i = 0; i < this.subs.length; i++) this.subs[i].unsubscribe();
  }
}
