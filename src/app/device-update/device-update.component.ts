import {Component, OnDestroy, OnInit} from '@angular/core';
import {Device} from '../modules/device';
import {DeviceServiceService} from '../services/device-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsocketService} from '../services/websocket.service';
import {FormControl, NgForm} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-device-update',
  templateUrl: './device-update.component.html',
  styleUrls: ['./device-update.component.css']
})
export class DeviceUpdateComponent implements OnInit{
  id: number;
  device: Device;
  devices: Device[] = [];
  msgCtrl = new FormControl('');
  destroyed$ = new Subject();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private deviceService: DeviceServiceService,
              public webSocketService: WebsocketService) {
    this.webSocketService = new WebsocketService();

  }

  applyChanges(){
    this.webSocketService.send({ device: this.msgCtrl.value });
    this.msgCtrl.setValue('');
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  ngOnInit() {
    this.webSocketService.connect().pipe(
      takeUntil(this.destroyed$)
    ).subscribe(device => this.devices.push(this.device));
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
