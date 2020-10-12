import {Component, OnInit} from '@angular/core';
import {Device} from '../modules/device';
import {DeviceServiceService} from '../device-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices: Device[];
  device: Device;

  constructor(private deviceService: DeviceServiceService, private route: ActivatedRoute,
              private router: Router) {
    this.device = new Device();
  }

  deleteById(id: number): any {
    console.log(id);

    this.deviceService.deleteById(id).subscribe(result => this.ngOnInit());
  }


  gotoDeviceList(): any {
    this.router.navigate(['/devices']);
  }

  ngOnInit(): any {
    this.deviceService.findAll().subscribe(data => {
      this.devices = data;
    });
  }

}
