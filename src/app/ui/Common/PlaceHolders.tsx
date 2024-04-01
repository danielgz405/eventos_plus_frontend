import clsx from 'clsx';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import { HamsterLoader } from './Loadings';

type PlaceHolderTextprops = {
  title: string;
  description: string;
  className?: string;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
};

type PlaceHolderTitleprops = {
  title: string;
  className?: string;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
};

type PlaceHolderIconprops = {
  className?: string;
  classNameIcon?: string;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
};

type PlaceHolderHamsterprops = {
  title: string;
  className?: string;
};

export function PlaceHolderText({ title, description, className, Icon }: PlaceHolderTextprops) {
  return (
    <div className={clsx(className ? className : '', 'border-2 rounded-3xl border-dashed border-primary flex flex-col justify-center items-center p-10')}>
      <div className="h-fit w-[70%] flex justify-center items-center flex-col p-10">
        <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-white">{title}</h2>
        <p className="text-sm text-primary text-center mt-3">{description}</p>
        <Icon className="mt-5 h-16 w-16 text-primary " />
      </div>
    </div>
  );
}

export function PlaceHolderTitle({ title, className, Icon }: PlaceHolderTitleprops) {
  return (
    <div className={clsx(className ? className : '', 'border-2 rounded-3xl border-dashed border-primary flex flex-col justify-center items-center p-10')}>
      <div className="h-fit w-[70%] flex justify-center items-center flex-col p-10">
        <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-white">{title}</h2>
        <Icon className="mt-5 h-16 w-16 text-primary " />
      </div>
    </div>
  );
}

export function PlaceHolderHamster({ title, className }: PlaceHolderHamsterprops) {
  return (
    <div className={clsx(className ? className : '', 'border-2 rounded-3xl border-dashed border-primary flex flex-col justify-center items-center p-10')}>
      <div className="h-fit w-[70%] flex justify-center items-center flex-col p-10">
        <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-white">{title}</h2>
        <div className="h-fit w-fit mt-10">
          <HamsterLoader />
        </div>
      </div>
    </div>
  );
}

export function PlaceHolderIcon({ Icon, className, classNameIcon }: PlaceHolderIconprops) {
  return (
    <div className={clsx(className ? className : '', 'border-2 rounded-3xl border-dashed border-primary flex flex-col justify-center items-center p-10')}>
      <div className="h-fit w-[70%] flex justify-center items-center flex-col">
        <Icon className={clsx(classNameIcon, 'h-16 w-16 text-primary')} />
      </div>
    </div>
  );
}
