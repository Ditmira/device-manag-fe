import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceServiceService} from '../device-service.service';
import {Device} from '../modules/device';
import {Attribute} from '../modules/attribute';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AttributeFormComponent} from '../attribute-form/attribute-form.component';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent {

  device: Device = new Device();
  submitted = false;
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
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted=true;
    this.deviceService.save(this.device).subscribe(result => this.gotoDeviceList());
  }

  save() {
    this.deviceService.save(this.device).subscribe(data => {
        console.log(data)
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
      width: '250px',
      height:'250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.device.attributes.push(result);
    });
  }
}
