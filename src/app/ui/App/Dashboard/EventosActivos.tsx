'use client';

import { Modal } from 'app/ui/Common/Modals';
import { ButtonDarker } from 'app/ui/Common/buttons';
import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { listEventAll } from 'api/events/eventos';
import { EventSchema } from 'api/events/event';
import MarketPoits from './Markets';
import { AuthSchema } from 'api/auth/auth';
import CreateStock from './CreateEvent';

export default function EventsActivos({ auth }: { auth: AuthSchema }) {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState<EventSchema[]>([]);
  const defaultProps = {
    center: {
      lat: 4.6322919,
      lng: -74.0811489,
    },
    zoom: 14,
  };

  const getEvents = () => {
    listEventAll().then((res) => {
      setEvents(res);
    });
  };

  useEffect(() => {
    if (auth.user) {
      getEvents();
    }
  }, [auth]);

  console.log(events);

  return (
    <div className="bg-secondary rounded-3xl">
      <div className="flex flex-row justify-between p-4 items-center">
        <p className="text-lg font-semibold text-tertiary">Eventos Activos</p>
        <ButtonDarker
          onClick={() => {
            setOpen(!open);
          }}
        >
          Crear Evento
        </ButtonDarker>
      </div>
      <div className="w-full h-[70vh] px-4 pb-4">
        <div className="rounded-3xl w-full h-full overflow-hidden relative">
          <div className="h-full w-full z-50 bg-none absolute" />
          <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyDELD1HALncMEggtlmZ7cld0O0-0Rtz14U' }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
            {events.map((event, idx) => (
              <MarketPoits key={idx} event={event} auth={auth} />
            ))}
          </GoogleMapReact>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} size="max-w-lg" title="Creacion del Evento" description="Se va a crear el evento que necesite">
        <CreateStock auth={auth} />
      </Modal>
    </div>
  );
}
