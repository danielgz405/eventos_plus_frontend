'use client';

import { useAuth } from 'Hooks/useAuth';
import { GeneralInput } from '../Common/Inputs';
import { ButtonDropdown } from '../Common/Modals';
import { FormEvent, useState } from 'react';
import { PlaceHolderHamster } from '../Common/PlaceHolders';

export default function Suggestions() {
  const auth = useAuth();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    auth.login(data.email, data.password);
  };
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center pb-6 px-48">
        <h1 className="text-5xl font-bold leading-normal text-white">Novedades</h1>
        <ButtonDropdown text="Sugerencia">
          <div className="w-96 p-3">
            {auth.user ? (
              <>
                {/*<GeneralInput className="!h-28" type="textarea" id="message" name="message" placeHolder="Mensaje" />
                <button className="bg-secondary mt-1 w-full py-1 text-lg text-tertiary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Enviar
            </button>*/}
                <PlaceHolderHamster title="Próximamente, sugerencias aquí." />
              </>
            ) : (
              <form className="space-y-2" onSubmit={(e) => submitHandler(e)}>
                <GeneralInput onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} id="email" name="email" type="email" placeHolder="Email" autoComplete="email" required />
                <GeneralInput
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  value={data.password}
                  id="password"
                  name="password"
                  placeHolder="Contraseña"
                  type="password"
                  autoComplete="current-password"
                  required
                />
                <div className="w-full flex justify-center items-center">
                  <button
                    type="submit"
                    className="bg-secondary w-full py-1 text-lg text-tertiary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Iniciar sesion
                  </button>
                </div>
              </form>
            )}
          </div>
        </ButtonDropdown>
      </div>
    </>
  );
}
