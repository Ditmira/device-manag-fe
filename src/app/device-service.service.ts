import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from './modules/device';
import { Observable } from 'rxjs';
import {Attribute} from './modules/attribute';

  @Injectable()
  export class DeviceServiceService {

    private devicesUrl: string;
    constructor(private http: HttpClient) {
      this.devicesUrl = 'http://localhost:8080/devices';
    }

    public findAll(): Observable<Device[]> {
      return this.http.get<Device[]>(this.devicesUrl);
    }

    public save(device: Device): any {
      return this.http.post<Device>(this.devicesUrl, device);
     }
    // attributeList: Attribute[] = [];
    // addAttribute(attribute: Attribute){
    //   console.log(attribute);
    // this.attributeList.push(attribute);
    //
    // }

   /* deleteById(device: Device): Observable<void>{
      const url='${this.devicesUrl}${id}';
      return this.http.delete<void>(url,this.httpOptions);
    }*/
  }
