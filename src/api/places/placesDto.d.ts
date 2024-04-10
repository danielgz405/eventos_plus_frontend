export interface PlaceDto {
  name: string;
  description: string;
  coordinates: Coordinates;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}
