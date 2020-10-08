import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceServiceService } from '../device-service.service';
import { Device } from '../device';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent {

  device: Device;
  devices: DeviceServiceService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceServiceService) {
    this.device = new Device();
  }

  onSubmit(): void{
    this.deviceService.save(this.device).subscribe(result => this.gotoDeviceList());
  }

  gotoDeviceList(): any{
    this.router.navigate(['/devices']);
  }
}
