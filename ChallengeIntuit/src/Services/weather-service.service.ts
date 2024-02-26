import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weather } from '../Interfaces/iweather';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private client: HttpClient) { }
  public async GetData(search: string):Promise<Observable<weather>>{
    return this.client.get<weather>(environment.url + "?key=" + environment.api_key + "&q=" + search + "&aqi=no");
  }
}
