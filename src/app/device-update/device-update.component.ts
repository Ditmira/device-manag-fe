import {Component, OnDestroy, OnInit} from '@angular/core';
import {Device} from '../modules/device';
import {DeviceServiceService} from '../services/device-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsocketService} from '../services/websocket.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-device-update',
  templateUrl: './device-update.component.html',
  styleUrls: ['./device-update.component.css']
})
export class DeviceUpdateComponent implements OnInit{
  id: number;
  device: Device;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private deviceService: DeviceServiceService,
              public webSocketService: WebsocketService) {
    this.webSocketService = new WebsocketService();

  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.deviceService.viewById(this.id)
      .subscribe(data => {
        console.log(data);
        this.device = data;
      }, error => console.log(error));
  }

  updateDevice() {
    this.deviceService.updateById(this.id, this.device)
      .subscribe(data => {
        console.log(data);
        this.device = new Device();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateDevice();
  }

  gotoList() {
    this.router.navigate(['/devices']);
  }
}
