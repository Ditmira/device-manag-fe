import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from './modules/device';
import { Observable } from 'rxjs';
import {Attribute} from './modules/attribute';

  @Injectable()
  export class DeviceServiceService {

    private devicesUrl: string;
    device: Device;
    constructor(private http: HttpClient) {
      this.devicesUrl = 'http://localhost:8080/devices/';
    }

    public findAll(): Observable<Device[]> {
      return this.http.get<Device[]>(this.devicesUrl);
    }

    public save(device: Device): any {
      return this.http.post<Device>(this.devicesUrl, device);
     }

    deleteById(id: number): any{
      console.log("vjen deri ktu dhe se fshin");
      let url = this.devicesUrl.concat(id.toString());
      return this.http.delete(url);

    }
  }
