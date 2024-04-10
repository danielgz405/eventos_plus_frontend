'use client';

import { GeneralInput, InputList } from 'app/ui/Common/Inputs';
import { ComfirmModal, ConfigModal } from 'app/ui/Common/Modals';
import { ButtonGreen, ButtonOrange } from 'app/ui/Common/buttons';
import { useEffect, useState } from 'react';
import { typeEventSchema } from 'api/type_events/typeEventSchema';
import { listTypeEventAll } from 'api/type_events/typeEvent';
import { AuthSchema } from 'api/auth/auth';
import { EventSchemaDto } from 'api/events/eventDto';
import { createEvent } from 'api/events/eventos';
import { Alert } from 'app/ui/utils/toast';
import { listPLaceAll } from 'api/places/places';
import { PlacesSchema } from 'api/places/placesSchemas';
import { Switch } from 'app/ui/Common/Switch';
import { TrashIcon } from '@heroicons/react/24/solid';

type props = {
  auth: AuthSchema;
};

export default function CreateStock({ auth }: props) {
  const [comfirm, setComfirm] = useState(false);
  const [enable, setEnabled] = useState(true);
  const [types_event, setTypes_event] = useState<typeEventSchema[]>([]);
  const [places, setPlaces] = useState<PlacesSchema[]>([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<EventSchemaDto>({
    name: '',
    capacity: 0,
    place_id: '',
    date: '',
    description: '',
    is_free: true,
    type_event: '',
    type_tiket: [{ name: '', price: 0 }],
  });

  const onSubmit = () => {
    setLoading(true);

    createEvent({ ...data, date: new Date(data.date).toDateString(), is_free: enable })
      .then(() => {
        Alert('se ha creado exitosamente', 'success');
        setLoading(false);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Alert('error', 'error');
      });
  };

  const configModal: ConfigModal = {
    title: 'Quieres crear el evento',
    description: 'Seguro?',
    type: 'create',
    buttonText: 'Crear',
    loading: loading,
    onAccepted: () => onSubmit(),
  };

  useEffect(() => {
    if (auth.user) {
      listTypeEventAll().then((res) => {
        setTypes_event(res);
      });
      listPLaceAll().then((res) => {
        setPlaces(res);
      });
    }
  }, [auth]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setComfirm(true);
        }}
        className="h-full w-full overflow-hidden flex flex-col"
      >
        <span className="w-full flex-1 overflow-y-auto">
          <div className="grid grid-cols-6 gap-3">
            <GeneralInput
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="!bg-secondary !placeholder-tertiary !text-darker col-span-6"
              id="name"
              name="name"
              placeHolder="Nombre"
              type="text"
              required
            />
            <GeneralInput
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              className="!bg-secondary !placeholder-tertiary !h-36 !text-darker col-span-6"
              id="description"
              name="description"
              placeHolder="Descripcion"
              type="textarea"
              required
            />

            <GeneralInput
              value={`${data.capacity}`}
              onChange={(e) => setData({ ...data, capacity: parseInt(e.target.value) })}
              className="!bg-secondary !placeholder-tertiary !text-darker col-span-6"
              id="capacity"
              name="capacity"
              placeHolder="Capacidad"
              type="number"
              required
            />

            <GeneralInput
              value={data.date}
              onChange={(e) => setData({ ...data, date: e.target.value })}
              className="!bg-secondary !placeholder-tertiary !text-darker col-span-6"
              id="date"
              name="date"
              placeHolder="Capacidad"
              type="date"
              required
            />

            <div className="w-full col-span-6 flex justify-center items-center space-x-3">
              <p className="text-white">Es gratis?</p>
              <Switch enabled={enable} setEnabled={setEnabled} />
            </div>

            <div className="col-span-6">
              <InputList
                className="!bg-secondary !placeholder-tertiary !text-darker"
                placeHolder="Selecciona el tipo de evento"
                items={types_event}
                required
                value={types_event?.find((even) => data.type_event === even._id) || { name: '' }}
                onChange={(e: any) => setData({ ...data, type_event: e._id as string })}
              />
            </div>

            <div className="col-span-6">
              <InputList
                className="!bg-secondary !placeholder-tertiary !text-darker"
                placeHolder="Selecciona el lugar"
                items={places}
                required
                value={places?.find((place) => data.place_id === place._id) || { name: '' }}
                onChange={(e: any) => setData({ ...data, place_id: e._id as string })}
              />
            </div>

            {!enable && (
              <div className="col-span-6 grid grid-cols-6 gap-3">
                {data.type_tiket.map((item, idx) => (
                  <>
                    <div className="col-span-3 group relative h-fit w-fit">
                      <GeneralInput
                        value={item.name}
                        onChange={(e) => {
                          setData((prev) => {
                            const currData = [...prev.type_tiket];
                            currData[idx] = {
                              ...currData[idx],
                              name: e.target.value,
                            };
                            e.target.value === '' && currData.every((item) => item.name === '');
                            return { ...data, type_tiket: currData };
                          });
                        }}
                        className="!bg-secondary !placeholder-tertiary !text-darker group-hover:!pr-10"
                        id="name"
                        name="name"
                        placeHolder="Nombre"
                        type="text"
                      />
                      <TrashIcon
                        onClick={() =>
                          setData((prev) => {
                            const currData = [...prev.type_tiket];
                            currData.splice(idx, 1);
                            return { ...data, type_tiket: currData };
                          })
                        }
                        className="h-5 w-5 hidden cursor-pointer absolute top-1/2 -translate-y-1/2 right-3 z-20 text-red-600 group-hover:block"
                      />
                    </div>
                    <GeneralInput
                      value={`${item.price}`}
                      onChange={(e) =>
                        setData((prev) => {
                          const currData = [...prev.type_tiket];
                          currData[idx] = {
                            ...currData[idx],
                            price: parseInt(e.target.value),
                          };
                          return { ...data, type_tiket: currData };
                        })
                      }
                      className="!bg-secondary !placeholder-tertiary !text-darker col-span-3"
                      id="value"
                      name="value"
                      placeHolder="Valor"
                      type="number"
                    />
                  </>
                ))}
                <ButtonOrange type="button" onClick={() => setData({ ...data, type_tiket: [...data.type_tiket, { name: '', price: 0 }] })} className="!w-full !col-span-6 !py-1">
                  Añardir otro ticket
                </ButtonOrange>
              </div>
            )}
          </div>
        </span>
        <div className="w-full h-fit flex-[0,0,auto] grid grid-cols-1 gap-3 pt-3">
          <ButtonGreen type="submit" className="!w-full !py-1">
            Crear
          </ButtonGreen>
        </div>
      </form>
      <ComfirmModal open={comfirm} setOpen={setComfirm} configModal={configModal} />
    </>
  );
}
