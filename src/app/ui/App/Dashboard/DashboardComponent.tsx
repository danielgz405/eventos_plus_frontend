import { AuthSchema } from 'api/auth/auth';
import Eventos from './Eventos';
import EventosActivos from './EventosActivos';
import EventosCreatedByUser from './EventosCreatedByUser';

type props = {
  auth: AuthSchema;
};

export default function DashboardComponet({ auth }: props) {
  console.log(auth);

  return (
    <div className="space-y-4 overflow-y-auto">
      <EventosActivos auth={auth} />
      {auth?.user?.is_creator && <EventosCreatedByUser />}
      <Eventos />
    </div>
  );
}
