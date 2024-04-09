export interface UserSchema {
  _id: string;
  name: string;
  email: string;
  image: string;
  image_ref: string;
  payment_data: PaymentData;
  is_creator: boolean;
  paypal_email: string;
}

export interface PaymentData {
  number: string;
  name: string;
  expiration_date: string;
  cvv: string;
}
