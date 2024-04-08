import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';

export default function Hero() {
  return (
    <div>
      <div className="relative isolate">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <Header />
        <div className="w-[75%] mx-auto py-10 flex flex-row">
          <div className="w-1/2">
            <div>
              <h1 className="text-4xl font-bold leading-normal text-white sm:text-6xl">
                Evento <br /> Plus <br />
              </h1>
              <p className="mt-10 text-lg leading-normal text-white">
                En Evento Plus, nos enorgullece ofrecerte una plataforma integral para la gestión de tus eventos, desde pequeñas reuniones hasta grandes conferencias. Con nuestra amplia gama de
                herramientas y servicios, puedes planificar, organizar y ejecutar eventos de manera eficiente y exitosa.
              </p>
              <div className="mt-14  gap-x-6">
                <Link
                  href="/singup"
                  className="bg-primary px-6 py-3 text-lg font-semibold text-tertiary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Registrate
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative">
            <div className="absolute w-fit h-fit right-0 top-28">
              <Image src="heroImage.svg" width={422.9} height={438.3} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
