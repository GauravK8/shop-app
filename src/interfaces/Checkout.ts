export interface ICheckout {
  id: number;
  cart_id: string;
  total_amount: number;
  contact_no: string;
  email: string;
  address: IAddress;
  payment_mode: string;
}

export interface IAddress {
  street: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
}
