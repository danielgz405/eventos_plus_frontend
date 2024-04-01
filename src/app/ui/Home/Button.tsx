import clsx from 'clsx';
import Link from 'next/link';

type props = {
  children: string;
  href: string;
  className?: string;
};

export default function Button({ children, href, className }: props) {
  return (
    <Link href={href} className={clsx('bg-slate-800 text-white', className ? className : '')}>
      {children}
    </Link>
  );
}
