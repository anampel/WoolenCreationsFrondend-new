import {ProductModel} from '../../products/product-item/product.model';
import {User} from '../../user/user';

export interface AddressList {
  addressId: number;
  address: string;
  number: number;
  postCode: string;
  city: string;
  country: string;
}

export interface OrderProduct {
  id: number;
  product: ProductModel;
  quantity: number;
}

export interface OrderModel {
  id: number;
  user: User;
  date: string;
  phone: string;
  paid: boolean;
  state: string;
  shipping_company_name: string;
  shipping_cost: number;
  orderProduct: OrderProduct[];
}



