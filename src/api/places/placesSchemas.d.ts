export interface PlacesSchema {
  _id: string;
  user_id: string;
  name: string;
  description: string;
  coordinates: Coordinates;
  created_at: Date;
  updated_at: Date;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}
