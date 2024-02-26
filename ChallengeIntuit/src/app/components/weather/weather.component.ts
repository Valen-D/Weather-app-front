import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WeatherServiceService } from '../../../Services/weather-service.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public form: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      location: new FormControl("")
    })
  }

  async getWeatherData(form:any) {
    (await this.weatherService.GetData(form.location)).subscribe(data => {
      this.weatherData = data;
    });
  }

}
