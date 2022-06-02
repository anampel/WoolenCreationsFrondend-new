import {AddressList} from '../shopping/order/order.model';

export class User {
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
  authdata?: string;
}

