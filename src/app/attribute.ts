export class Attribute {
  id: number;
  attributeName: string;
  minValue: number;
  maxValue: number;
  actualValue:number;

  constructor() {
    this.id = 2;
      this.attributeName = "Example";
      this.minValue =0;
      this.maxValue = 5;
      this.actualValue = 2;
  }
}
