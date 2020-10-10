  export class Device {
    id: number;
    deviceType: string;
    deviceState: string;
    attributes:[{
     attributeId:number;
      attributeName: string;
      maxValue: number;
      minValue: number;
      actualValue: number;
    }]
}
