import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { IType } from '@src/interfaces/IType';
import { IBrand } from '@src/interfaces/IBrand';
import { IDeviceData } from './item.interface';

class ItemsStore {
  types = [] as IType[];
  brands = [] as IBrand[];
  devices = {} as IDeviceData;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'ItemsStore',
      properties: ['types', 'brands', 'devices'],
      storage: window.localStorage,
    });
  }

  setTypes(value: IType[]) {
    this.types = value;
  }

  setBrands(value: IBrand[]) {
    this.brands = value;
  }

  setDevices(value: IDeviceData) {
    this.devices = value;
  }
}

const itemStore = new ItemsStore();
export default itemStore;
