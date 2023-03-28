/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from 'mobx';

class ItemsStore {
  types = [
    { id: 1, name: 'Camera' },
    { id: 2, name: 'Mobile phones' },
  ];
  brands = [{ id: 1, name: 'Apple' }];
  devices = [
    {
      id: 1,
      name: 'Iphone 11',
      price: 600,
      rating: 0,
      img:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gsmarena.com%2Fapple_iphone_11-pictures-9848.php&psig=AOvVaw3BjsNqAM-gB7Bm5uGL3FZo&ust=1680086651860000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOiXtda4_v0CFQAAAAAdAAAAABAE',
    },
    {
      id: 2,
      name: 'Iphone 11',
      price: 600,
      rating: 0,
      img:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gsmarena.com%2Fapple_iphone_11-pictures-9848.php&psig=AOvVaw3BjsNqAM-gB7Bm5uGL3FZo&ust=1680086651860000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOiXtda4_v0CFQAAAAAdAAAAABAE',
    },
    {
      id: 3,
      name: 'Iphone 11',
      price: 600,
      rating: 0,
      img:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gsmarena.com%2Fapple_iphone_11-pictures-9848.php&psig=AOvVaw3BjsNqAM-gB7Bm5uGL3FZo&ust=1680086651860000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOiXtda4_v0CFQAAAAAdAAAAABAE',
    },
  ];

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
