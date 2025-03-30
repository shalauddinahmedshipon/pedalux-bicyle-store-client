export interface TCategory {
  _id?: string;
  name: string;
  slug: string;
  isDeleted:boolean
  createdAt?: Date;
  updatedAt?: Date;
}


export interface IProduct  {
  _id?: string;
  name: string;
  brand: string;
  model: string;
  category:TCategory;
  price: number;
  stock: number;
  description?: string;
  imageUrl: string;
  isDeleted?:boolean
  createdAt?: Date;
  updatedAt?: Date;
}