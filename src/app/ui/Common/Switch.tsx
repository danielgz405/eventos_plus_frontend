import { Switch as Sw } from '@headlessui/react';
import clsx from 'clsx';
import { Dispatch, ForwardRefExoticComponent, RefAttributes, SVGProps, SetStateAction } from 'react';

type Switchprops = {
  enabled: boolean;
  className?: string;
  setEnabled: Dispatch<SetStateAction<boolean>>;
};

type SwitchIconprops = {
  enabled: boolean;
  className?: string;
  disabled?: boolean;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
  onChange: () => void;
};

export function Switch({ enabled, className, setEnabled }: Switchprops) {
  return (
    <div className={clsx(className)}>
      <Sw
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-primary' : 'bg-primary/70'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Sw>
    </div>
  );
}

export function SwitchIcon({ enabled, className, disabled, Icon, onChange }: SwitchIconprops) {
  return (
    <div className={clsx(className)}>
      <Sw
        checked={enabled}
        onChange={() => onChange()}
        disabled={disabled}
        className={`${enabled ? 'bg-primary' : 'bg-primary/70'}
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
              pointer-events-none ml-0.5 my-auto flex justify-center items-center h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          <Icon className={clsx(enabled ? 'text-primary' : 'text-primary/70', 'h-4 w-4')} />
        </span>
      </Sw>
    </div>
  );
}
