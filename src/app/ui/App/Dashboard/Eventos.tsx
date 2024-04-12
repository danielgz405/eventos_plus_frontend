'use client';

import { Modal } from 'app/ui/Common/Modals';
import { ButtonDarker } from 'app/ui/Common/buttons';
import { ReactNode, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import ListEvent from './ListEvent';
import { AuthSchema } from 'api/auth/auth';

const Marker = ({ children }: { children: ReactNode; lat: number; lng: number }) => children;

export default function Eventos({auth}:{auth:AuthSchema}) {
  const [open, setOpen] = useState(false);
  const defaultProps = {
    center: {
      lat: 4.6322919,
      lng: -74.0811489,
    },
    zoom: 14,
  };

  return (
    <div className="bg-secondary rounded-3xl">
      <div className="flex flex-row justify-between p-4 items-center">
        <p className="text-lg font-semibold text-tertiary">Tus eventos</p>
        <ButtonDarker
          onClick={() => {
            setOpen(!open);
          }}
        >
          Buscar Evento
        </ButtonDarker>
      </div>
      <div className="w-full h-[70vh] px-4 pb-4">
        <div className="rounded-3xl w-full h-full overflow-hidden relative">
          <div className="h-full w-full z-50 bg-none absolute" />
          <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyDELD1HALncMEggtlmZ7cld0O0-0Rtz14U' }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
            <Marker lat={4.6323894} lng={-74.0812382}>
              <button className="bg-none border-none">
                <img src="https://cdn-icons-png.flaticon.com/512/17/17177.png" alt="uwu" className="w-5" />
              </button>
            </Marker>
          </GoogleMapReact>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} size="max-w-lg" title="Busqueda de evento" description="Se puede buscar el evento creado por el usuario">
        <ListEvent auth={auth}/>
      </Modal>
    </div>
  );
}
