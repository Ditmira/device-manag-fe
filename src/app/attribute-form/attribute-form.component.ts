import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceServiceService} from '../device-service.service';
import {Device} from '../device';
import {Attribute} from '../attribute';

@Component({
  selector: 'app-attribute-form',
  templateUrl: './attribute-form.component.html',
  styleUrls: ['./attribute-form.component.css']
})
export class AttributeFormComponent implements OnInit {
  device: Device;
  attribute: Attribute;
  devices: DeviceServiceService;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceServiceService) {
    this.attribute = new Attribute();
  }

  ngOnInit(): void {
  }

}
