import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="mx-36 flex z-20 items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Evento Plus</span>
            <Image width={80} height={80} src="/Logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <Link href="/login" className="text-md leading-normal text-white border border-white py-2 px-12 rounded-full cursor-pointer">
            Iniciar sesion
          </Link>
        </div>
      </nav>
    </header>
  );
}
