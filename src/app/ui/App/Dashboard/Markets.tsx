import { AuthSchema } from 'api/auth/auth';
import { EventSchema } from 'api/events/event';
import { getPlaceById } from 'api/places/places';
import { PlacesSchema } from 'api/places/placesSchemas';
import { ReactNode, useEffect, useState } from 'react';

const Marker = ({ children }: { children: ReactNode; lat: number; lng: number }) => children;

export default function MarketPoits({ event, auth }: { event: EventSchema; auth: AuthSchema }) {
  const [place, setPlace] = useState<PlacesSchema>({} as PlacesSchema);

  useEffect(() => {
    if (auth) {
      getPlaceById(event.place_id).then((res) => {
        setPlace(res);
      });
    }
  }, [event]);

  return (
    <Marker lat={parseFloat(place?.coordinates?.latitude || '0')} lng={parseFloat(place?.coordinates?.longitude || '0')}>
      <button className="bg-none border-none">
        <img src="https://cdn-icons-png.flaticon.com/512/17/17177.png" alt="uwu" className="w-5" />
      </button>
    </Marker>
  );
}
