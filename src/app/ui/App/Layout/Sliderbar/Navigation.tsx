'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname);

  const navigation = [
    { name: 'Dashboard', isCurrent: pathname === '/sww/dashboard', to: '/sww/dashboard', requireRoles: ['admin'] },
    { name: 'Inventario', isCurrent: pathname === '/sww/stock', to: '/sww/stock', requireRoles: ['admin'] },
    { name: 'Servicios', isCurrent: pathname === '/sww/services', to: '/sww/services', requireRoles: ['admin'] },
    { name: 'Cotizaciones', isCurrent: pathname === '/sww/quotes', to: '/sww/quotes', requireRoles: ['admin'] },
    { name: 'Seguimiento', isCurrent: pathname === '/sww/tracking', to: '/sww/tracking', requireRoles: ['admin'] },
    { name: 'Facturas', isCurrent: pathname === '/sww/invoices', to: '/sww/invoices', requireRoles: ['admin'] },
    { name: 'Compañia', isCurrent: pathname === '/sww/company', to: '/sww/company', requireRoles: ['admin'] },
  ];

  return (
    <div className="divide-y divide-tertiary bg-secondary rounded-3xl flex flex-col">
      <div className="flex flex-row items-center py-2 relative h-28">
        <Image width={80} height={80} src={'/Logo.svg'} alt="" className=" absolute top-4 left-4 cursor-pointer" onClick={() => router.push('/')} />
        <h2 className="mx-auto text-center text-4xl font-bold leading-9 tracking-tight text-tertiary">SWW</h2>
      </div>
      {navigation.map((item) => (
        <Link href={item.to} key={item.name} className={clsx(item.isCurrent ? 'text-tertiary/60' : 'text-tertiary', 'text-lg px-8 py-4 font-semibold hover:text-white leading-6')}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
