import { clsx } from 'clsx';

interface Props {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export function Container({ className, children, ...props }: Props) {
  return (
    <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  );
}
