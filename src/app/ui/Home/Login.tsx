'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { AuthSchema } from 'api/auth/auth';
import { Alert } from '../utils/toast';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { GeneralInput } from '../Common/Inputs';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/cyc-acabados-arquitectonicos.appspot.com/o/sww%2FHomeImages%2FDALL%C2%B7E%202023-11-10%2017.06.png?alt=media&token=5d1259cd-7091-4275-8f42-db51d674acc2',
  'https://firebasestorage.googleapis.com/v0/b/cyc-acabados-arquitectonicos.appspot.com/o/sww%2FHomeImages%2FDALL%C2%B7E%202023-11-10%2017.12.png?alt=media&token=c09c96ab-9870-4903-9c4a-1794dc7d475e',
  'https://firebasestorage.googleapis.com/v0/b/cyc-acabados-arquitectonicos.appspot.com/o/sww%2FHomeImages%2F_6b900cb0-90fd-4026-9b37-794dfc6d53db.png?alt=media&token=5579f922-4070-4607-9642-0bb8df3278b4',
  'https://firebasestorage.googleapis.com/v0/b/cyc-acabados-arquitectonicos.appspot.com/o/sww%2FHomeImages%2F_b0f2b1b5-c14b-4859-b8d1-92c65180b52a.png?alt=media&token=d16174f2-43f5-46d1-bb6b-4c032a94b311',
  'https://firebasestorage.googleapis.com/v0/b/cyc-acabados-arquitectonicos.appspot.com/o/sww%2FHomeImages%2F_ce0c4246-dbbe-40bf-be16-17d428ae330e.png?alt=media&token=e765f218-a4db-4802-906f-a08b528adf29',
  'https://firebasestorage.googleapis.com/v0/b/cyc-acabados-arquitectonicos.appspot.com/o/sww%2FHomeImages%2F_d66a5485-2174-44cf-9f12-cff8078d0801.png?alt=media&token=2e2c15c4-d631-44b2-bc6a-cec64910b21e',
];

type props = {
  auth: AuthSchema;
};

export default function LoginComponent({ auth }: props) {
  const router = useRouter();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    auth
      .login(data.email, data.password)
      .then(() => {
        router.push('eventoplus/dashboard');
        Alert(`Bienvenido ${auth.user?.name}`, 'success');
      })
      .catch((res) => {
        console.log(res);
        if (res.response?.data?.message === 'Invalid credentials') {
          Alert('Correo o contraseña incorrectos', 'warning');
        } else {
          Alert('Error en el servidor. Contacte con su administrador para más información.', 'error');
        }
      });
  };
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="h-fit relative container-transparent">
          <div>
            <Image
              width={80}
              height={80}
              src={
                auth.user ? (auth.user.image ? auth.user.image : `https://ui-avatars.com/api/?name=${auth?.user?.name}&size=214&rounded=true&background=EBB093&color=1A1C28&bold=true`) : '/Logo.svg'
              }
              alt=""
              className="absolute mx-auto left-0 right-0 -top-10 cursor-pointer"
              onClick={() => router.push('/')}
            />
            <h2 className="mt-16 text-center text-3xl font-bold leading-9 tracking-tight text-white">{auth.user ? auth.user.name : 'Evento Plus'}</h2>
            {auth.user && <p className="text-sm text-primary text-center mt-3">{auth.user.email}</p>}
          </div>
          <div className="mt-10 w-[70vh]">
            {auth.user ? (
              <div className="space-y-5 px-10">
                <div className="w-full flex justify-center items-center space-x-3">
                  <button
                    onClick={() => router.push('/eventoplus/dashboard')}
                    className="bg-primary px-28 py-3 text-base font-semibold text-tertiary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Entrar
                  </button>
                  <button
                    onClick={() => auth.logout()}
                    className="bg-darker p-3 text-base font-semibold text-primary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-5 px-10" onSubmit={(e) => submitHandler(e)}>
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

                <div className="w-full flex justify-center items-center flex-row">
                  <Link
                    href="/singup"
                    className="bg-primary px-16 py-3 mr-3 text-base font-semibold text-tertiary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Resgistrate
                  </Link>
                  <button
                    type="submit"
                    className="bg-primary px-16 py-3 text-base font-semibold text-tertiary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Iniciar sesion
                  </button>
                </div>
              </form>
            )}
            <div className="w-full h-44 mt-8 overflow-hidden rounded-3xl flex justify-center items-center">
              <div className="relative h-[600px] w-[105%]">
                <Image layout="fill" src={images[Math.floor(Math.random() * images.length)]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
