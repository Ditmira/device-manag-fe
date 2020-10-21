import {Component, OnInit} from '@angular/core';
import {Device} from '../modules/device';
import {DeviceServiceService} from '../services/device-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';


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

  ngOnInit(): any {
    this.deviceService.findAll().subscribe(data => {
      this.devices = data;
    });
  }
  updateById(id: number){
    this.router.navigate(['updateByID', id]);
  }

  viewById(id: number){
  this.router.navigate(['viewByID', id]);
}
}
