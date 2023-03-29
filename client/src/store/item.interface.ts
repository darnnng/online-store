export interface IDevice {
  id: number;
  img: string;
  name: string;
  price: number;
  rating: number;
}

export interface IDeviceData {
  count: number;
  rows: IDevice[];
}
