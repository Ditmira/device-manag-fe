import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceServiceService} from '../device-service.service';
import {Device} from '../modules/device';
import {Attribute} from '../modules/attribute';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AttributeFormComponent} from '../attribute-form/attribute-form.component';
@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent implements OnInit {
  id: number;
  device: Device;
  attribute: Attribute;
  devices: DeviceServiceService;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceServiceService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AttributeFormComponent>

  ) {  }

  ngOnInit() {
    this.device = new Device();

    this.id = this.route.snapshot.params['id'];

    this.deviceService.viewById(this.id)
      .subscribe(data => {
        console.log(data)
        this.device = data;
      }, error => console.log(error));
  }

  deviceList(){
    this.router.navigate(['devices']);
  }

}
