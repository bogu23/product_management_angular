import {ManufacturerData} from './ManufacturerData';

export class ProductData {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  manfacturer: ManufacturerData;
}
