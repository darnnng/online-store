import { makeAutoObservable } from 'mobx';
import { IDeviceData } from './item.interface';
/* eslint-disable @typescript-eslint/no-explicit-any */

class ItemsStore {
  types = [];
  brands = [];
  devices = {} as IDeviceData;

  constructor() {
    makeAutoObservable(this);
  }

  setTypes(value: any) {
    this.types = value;
  }

  setBrands(value: any) {
    this.brands = value;
  }

  setDevices(value: any) {
    this.devices = value;
  }
}

const itemStore = new ItemsStore();
export default itemStore;
