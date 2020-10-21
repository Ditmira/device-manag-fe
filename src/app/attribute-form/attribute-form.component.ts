import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceServiceService} from '../services/device-service.service';
import {Device} from '../modules/device';
import {Attribute} from '../modules/attribute';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-attribute-form',
  templateUrl: './attribute-form.component.html',
  styleUrls: ['./attribute-form.component.css']
})

export class AttributeFormComponent implements OnInit {
  device: Device;
  attribute: Attribute;
  devices: DeviceServiceService;
  id: number;
  attributeName:string;
  minValue:number;
  maxValue:number;
  actualValue:number;
  form: FormGroup;

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<AttributeFormComponent>,
              @Inject(MAT_DIALOG_DATA) {id, attributeName, minValue, maxValue, actualValue}:Attribute) {

    this.id = id;
    this.attributeName = attributeName;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.actualValue = actualValue;

    this.form = fb.group({
      id: [id, Validators.required],
      attributeName: [attributeName, Validators.required],
      minValue: [minValue, Validators.required],
      maxValue: [maxValue,Validators.required],
      actualValue: [actualValue,Validators.required],
    });
  }
  ngOnInit() {
  }
  save() {
    this.dialogRef.close(this.form.value);
  }
  close() {
    this.dialogRef.close();
  }
}
