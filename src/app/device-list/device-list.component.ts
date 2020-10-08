import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { DeviceServiceService } from '../device-service.service';
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices: Device[];
  constructor(private deviceService: DeviceServiceService) { }

  ngOnInit(): any{
    this.deviceService.findAll().subscribe(data => {
      this.devices = data;
    });
  }

}
