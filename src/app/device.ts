import {Attribute} from './attribute';

export class Device {
    id: number;
    deviceType: string;
    deviceState: string;
    attributes: Attribute[];
}
