import { Modal } from 'app/ui/Common/Modals';
import { ButtonOrange } from 'app/ui/Common/buttons';
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import CreateEvent from './CreateEvent';
const AnyReactComponent = ({ children }) => <>{children}</>;


export default function DashboardComponet() {
  const [open, setOpen] = useState(false);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (<>
    <div className="w-full bg-secondary rounded-2xl">
      <div className="flex flex-row justify-between p-4 items-center">
        <p className="text-lg font-semibold text-tertiary">Eventos Activos</p>
        <ButtonOrange onClick={() =>{setOpen (!open)}}>Crear Evento</ButtonOrange>
      </div>
      <div style={{ height: '100vh', width: '100%' }}>
      
    </div>
    <Modal open={open} setOpen={setOpen} size="max-w-lg" title="Creacion del Evento" description="Se va a crear el evento que necesite">
       <CreateEvent/>
      </Modal>
    </div>

  </>);
}
