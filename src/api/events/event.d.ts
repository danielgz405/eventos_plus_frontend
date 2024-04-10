export interface EventSchema {
  _id: string;
  place_id: string;
  type_event: string;
  user_id: string;
  name: string;
  description: string;
  date: Date;
  is_free: boolean;
  capacity: number;
  type_tiket: TypesTikets[];
}

export interface TypesTikets {
  name: string;
  price: number;
}
