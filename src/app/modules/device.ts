import {Attribute} from './attribute';

export class Device {
    id: number;
    deviceType: string;
    deviceState: string;
    attributes: Attribute[];

    constructor(){
      this.id=0;
      this.deviceType="";
      this.deviceState="";
      this.attributes=[];
    }
}


