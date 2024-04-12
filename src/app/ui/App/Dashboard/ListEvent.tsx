import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import { AuthSchema } from 'api/auth/auth';
import { EventSchema } from 'api/events/event';
import { listEventsByName } from 'api/events/eventos';
import { createReserve, listReserveUserId } from 'api/reserve/reserve';
import { ReserveSchema } from 'api/reserve/reserveSchema';
import { GeneralInput } from 'app/ui/Common/Inputs';
import { Navigation } from 'app/ui/Common/Navigations';
import { ButtonOrange } from 'app/ui/Common/buttons';
import { Alert } from 'app/ui/utils/toast';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function ListEvent({ auth }: { auth: AuthSchema }) {
  const [search, setSearch] = useState('');
  const limit = 1;
  const [page, setPage] = useState(1);
  const [quantityPage, setQuantityPage] = useState(1);
  const [events, setEvents] = useState([] as EventSchema[]);
  const [reserve, setReserve] = useState([] as ReserveSchema[]);
  const sutmiReserve = (event_id: string) => {
    createReserve({ event_id })
      .then(() => {
        Alert('Se ha registrado correctamente la reserve', 'success');
      })
      .catch(() => {
        Alert('Ha ocurrido un error, contacte al administrador', 'error');
      });
  };
  const getEvents = () => {
    listEventsByName(`${limit}`, `${page}`, search).then((res) => {
      setEvents(res.events);
      setQuantityPage(Math.ceil(res.quantity / limit));
    });
  };
  const getReserve = () => {
    listReserveUserId(auth.user?._id || '').then((res) => {
      setReserve(res);
    });
  };
  useEffect(() => {
    auth && getEvents();
    auth && getReserve();
  }, [search, auth]);
  return (
    <div className="h-full w-full overflow-hidden flex flex-col">
      <div className="w-full flex-[0,0,auto]">
        <div className="flex flex-row relative w-full">
          <GeneralInput
            className="flex-1 bg-secondary"
            id="search"
            name="search"
            type="text"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>
      <span className="w-full flex-1 overflow-y-auto">
        {events.map((event, idx) => (
          <div className={clsx('text-white flex flex-row justify-between rounded-3xl p-4', reserve.find((item) => item.event_id === event._id) ? 'bg-cyan-200 text-darker' : '')}>
            <div>{event.name}</div>
            <div>
              <ButtonOrange onClick={() => sutmiReserve(event._id)}>Registrarse</ButtonOrange>
            </div>
          </div>
        ))}
      </span>
      <div className="w-full h-fit flex-[0,0,auto] gap-3 pt-3">
        <Navigation page={page} pages={quantityPage} setPage={setPage} />
      </div>
    </div>
  );
}
