import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceServiceService } from '../device-service.service';
import { Device } from '../device';
import { Attribute } from '../attribute';
@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent {

  device: Device;
  attribute: Attribute;
  devices: DeviceServiceService;
  attributes: DeviceServiceService;//not ok ikr

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceServiceService) {
    this.device = new Device();
    this.attribute = new Attribute();
  }

  onSubmit(): void{
    this.deviceService.save(this.device).subscribe(result => this.gotoDeviceList());
  }

  gotoDeviceList(): any{
    this.router.navigate(['/devices']);
  }

  addAttribute(): any{
  var table: HTMLTableElement =<HTMLTableElement> document.getElementById("attributeTable");
  var row= table.insertRow(0);
  var cell1= row.insertCell(0);
  var cell2= row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  }
}
