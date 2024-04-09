'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="divide-y divide-tertiary bg-secondary rounded-3xl flex flex-col col-span-3">
      <div className="flex flex-row items-center py-2 px-2 relative">
        <Image width={50} height={50} src={'/Logo.svg'} alt="" className="cursor-pointer pr-2" onClick={() => router.push('/')} />
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-tertiary">SWW</h2>
      </div>
    </div>
  );
}
