export interface IItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export interface IItemBoxProps {
  item: IItem;
}
