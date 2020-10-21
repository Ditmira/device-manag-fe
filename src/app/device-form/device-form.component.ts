import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceServiceService} from '../services/device-service.service';
import {Device} from '../modules/device';
import {Attribute} from '../modules/attribute';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {AttributeFormComponent} from '../attribute-form/attribute-form.component';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeviceFormComponent {

  device:Device;
  attribute: Attribute;
  devices: DeviceServiceService;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceServiceService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AttributeFormComponent>

  ) {
    this.device = new Device();
  }

  onSubmit(): void {
    this.deviceService.save(this.device).subscribe(result => this.gotoDeviceList());
  }

  save() {
    this.deviceService.save(this.device).subscribe(data => {
        console.log(data);
        this.device = new Device();
        this.gotoDeviceList();
      },
      error => console.log(error));
  }

  gotoDeviceList(): any {
    this.router.navigate(['/devices']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AttributeFormComponent, {
      width: '450px',
      height:'450px'
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //   this.device.attributes.push(result);
    // });
  }

}
