import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from './device';
import { Observable } from 'rxjs';

@Injectable()
export class DeviceServiceService {

  private devicesUrl: string;

  constructor(private http: HttpClient) {
    this.devicesUrl = 'http://localhost:8080/devices';
  }

  public findAll(): Observable<Device[]> {
    return this.http.get<Device[]>(this.devicesUrl);
  }

  public save(user: Device): any {
    return this.http.post<Device>(this.devicesUrl, Device);
  }
}
