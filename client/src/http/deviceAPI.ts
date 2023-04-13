import { IType } from '@src/interfaces/IType';
import { IBrand } from '@src/interfaces/IBrand';
import { $host } from './index';

export const createType = async (type: IType) => {
  const { data } = await $host.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createBrand = async (brand: IBrand) => {
  const { data } = await $host.post('api/brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createDevice = async (device: FormData) => {
  const { data } = await $host.post('api/device', device);
  return data;
};

export const fetchDevices = async () => {
  const { data } = await $host.get('api/device');
  return data;
};

export const fetchDevice = async (id: number) => {
  const { data } = await $host.get('api/device' + id);
  return data;
};
