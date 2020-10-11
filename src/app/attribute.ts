export class Attribute {
  id: number;
  attributeName: string;
  minValue: number;
  maxValue: number;
  actualValue:number;

  constructor(id:number,attributeName:string, minValue:number, maxValue: number, actualValue: number) {
     this.id = id;
      this.attributeName = attributeName;
      this.minValue =minValue;
      this.maxValue = maxValue;
      this.actualValue = actualValue;
  }
}
