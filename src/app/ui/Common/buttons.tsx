import clsx from 'clsx';
import { ReactNode } from 'react';

type ButtonOrangeprops = {
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: any) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: ReactNode;
};

type ButtonGreenprops = {
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: any) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: ReactNode;
};

export function ButtonOrange({ className, onClick, disabled, type, children }: ButtonOrangeprops) {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      type={type}
      disabled={disabled}
      className={clsx(
        className,
        disabled && '!bg-primary/80 cursor-not-allowed',
        'bg-primary px-10 py-2 h-fit w-fit text-base font-semibold text-tertiary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
      )}
    >
      {children}
    </button>
  );
}

export function ButtonGreen({ className, onClick, disabled, type, children }: ButtonGreenprops) {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      type={type}
      disabled={disabled}
      className={clsx(
        className,
        disabled && '!bg-secondary/80 cursor-not-allowed',
        'bg-secondary px-10 py-2 h-fit w-fit text-base font-semibold text-tertiary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
      )}
    >
      {children}
    </button>
  );
}

export function ButtonDarker({ className, onClick, disabled, type, children }: ButtonOrangeprops) {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      type={type}
      disabled={disabled}
      className={clsx(
        className,
        disabled && '!bg-darker/80 cursor-not-allowed',
        'bg-darker px-10 py-2 h-fit w-fit text-base font-semibold text-secondary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
      )}
    >
      {children}
    </button>
  );
}
