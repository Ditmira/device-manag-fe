import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceServiceService} from '../device-service.service';
import {Device} from '../device';
import {Attribute} from '../attribute';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AttributeFormComponent} from '../attribute-form/attribute-form.component';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent {

  device: Device;
  attribute: Attribute;
  devices: DeviceServiceService;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceServiceService
    // public dialog: MatDialog,
    // public dialogRef: MatDialogRef<AttributeFormComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: Attribute
  ) {
    this.device = new Device();
  }

  onSubmit(): void {
    this.deviceService.save(this.device).subscribe(result => this.gotoDeviceList());
  }

  gotoDeviceList(): any {
    this.router.navigate(['/devices']);
  }
    addAttribute(){
    this.device.attributes=this.device.attributes||[];
    this.device.attributes.push(new Attribute());
    }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(AttributeFormComponent, {
  //     width: '250px',
  //     data: {
  //       id: this.attribute.id, name: this.attribute.attributeName, minValue: this.attribute.minValue,
  //       maxValue: this.attribute.maxValue, actualValue: this.attribute.actualValue
  //     }
  //   });
  // }
}
