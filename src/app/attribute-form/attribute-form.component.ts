import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceServiceService} from '../device-service.service';
import {Device} from '../device';
import {Attribute} from '../attribute';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../device-form/device-form.component';

@Component({
  selector: 'app-attribute-form',
  templateUrl: './attribute-form.component.html',
  styleUrls: ['./attribute-form.component.css']
})

export class AttributeFormComponent {
  device: Device;
  attribute: Attribute;
  devices: DeviceServiceService;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<AttributeFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.attribute = new Attribute(0,"",0,0,0);
  }
  onNoClick(): void {
    this.dialogRef.close(this.attribute);
  }
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
