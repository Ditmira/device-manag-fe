export class Attribute {
  id: number;
  attributeName: string;
  minValue: number;
  maxValue: number;
  actualValue:number;

  constructor() {
     this.id = 0;
      this.attributeName = "";
      this.minValue =0;
      this.maxValue = 0;
      this.actualValue = 0;
  }
}
