import {AddressList} from '../shopping/order/order.model';

export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  addressList: AddressList[];
  wishList: any[];
  role: string;
  points: number;
  guest: boolean;
}
