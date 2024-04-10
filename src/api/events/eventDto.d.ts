import { TypesTikets } from './event';

export interface EventSchemaDto {
  place_id: string;
  type_event: string;
  name: string;
  description: string;
  date: string;
  is_free: boolean;
  capacity: number;
  type_tiket: TypesTikets[];
}

export interface EventUpdatedSchemaDto {
  type_event: string;
  name: string;
  is_free: boolean;
  capacity: number;
  type_tiket: TypesTikets[];
}
