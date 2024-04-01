'use client';

import { Dialog, Menu, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Dispatch, Fragment, ReactNode, SetStateAction } from 'react';
import { ButtonGreen, ButtonOrange } from './buttons';
import { HamsterLoader } from './Loadings';
import Image from 'next/image';

type Modalprops = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
  children: ReactNode;
  size?: 'max-w-md' | 'max-w-lg' | 'max-w-xl' | 'max-w-2xl' | 'max-w-3xl' | 'max-w-4xl' | 'max-w-5xl' | 'max-w-6xl' | 'max-w-7xl';
};

type ModalImageprops = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  url: string;
};

type ItemsDropdownprops = {
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'file';
  accept?: string;
  id: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: any) => void;
};

type ButtonDropdownprops = {
  type?: 'button';
  text: string;
  position?: 'top' | 'bottom' | 'bottom-left' | 'bottom-right';
  className?: string;
  children: ReactNode;
};

type ButtonDropdownpropsManual = {
  type?: 'button';
  text: string;
  disabled?: boolean;
  position?: 'top' | 'bottom' | 'bottom-left' | 'bottom-right';
  className?: string;
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type AnyDropdownprops = {
  children: ReactNode;
  // eslint-disable-next-line no-unused-vars
  Element: (props: any) => JSX.Element;
};

export type ConfigModal = {
  title: string;
  description: string;
  type: 'delete' | 'default' | 'create';
  buttonText: string;
  loading: boolean;
  onAccepted: () => void;
};

type ComfirmModalprops = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  configModal: ConfigModal;
};

export function Modal({ open, setOpen, size = 'max-w-md', title, description, children }: Modalprops) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full justify-end p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 -right-[60vw]"
              enterFrom="opacity-0 scale-95 -right-20"
              enterTo="opacity-100 scale-100 right-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(size, 'w-full h-full relative flex flex-col transform overflow-hidden rounded-3xl container-transparent p-4 text-left align-middle shadow-xl transition-all')}
              >
                <XCircleIcon onClick={() => setOpen(false)} className="w-6 h-6 text-darker cursor-pointer hover:text-rose-500 absolute top-3 left-3" />
                <Dialog.Title as="h3" className="text-center text-3xl font-bold leading-9 tracking-tight text-white">
                  {title}
                </Dialog.Title>
                <div className="mx-auto mt-4 max-w-md w-fit h-fit px-3 py-0.5 bg-secondary rounded-full">
                  <p className="text-sm text-tertiary text-center font-semibold">{description}</p>
                </div>
                <div className="w-full h-full bg-darker overflow-hidden rounded-3xl p-4 mt-5">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export function ModalImmage({ open, setOpen, url }: ModalImageprops) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full justify-center items-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 -right-[60vw]"
              enterFrom="opacity-0 scale-95 -right-20"
              enterTo="opacity-100 scale-100 right-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-lg max-h-min w-full h-[90vh] relative flex flex-col transform overflow-hidden rounded-3xl container-transparent p-4 text-left align-middle shadow-xl transition-all">
                <>
                  <XCircleIcon onClick={() => setOpen(false)} className="w-6 h-6 text-darker z-50 cursor-pointer hover:text-rose-500 absolute top-3 left-3" />
                  <Image src={`${url}`} alt="" fill={true} objectFit="cover" quality={100} />
                </>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export function ComfirmModal({ open, setOpen, configModal }: ComfirmModalprops) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full justify-center items-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 -right-[60vw]"
              enterFrom="opacity-0 scale-95 -right-20"
              enterTo="opacity-100 scale-100 right-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-md max-h-min w-full relative flex flex-col transform overflow-hidden rounded-3xl container-transparent p-4 text-left align-middle shadow-xl transition-all">
                {configModal.loading ? (
                  <div className="flex justify-center items-center p-10">
                    <HamsterLoader />
                  </div>
                ) : (
                  <>
                    <XCircleIcon onClick={() => setOpen(false)} className="w-6 h-6 text-darker cursor-pointer hover:text-rose-500 absolute top-3 left-3" />
                    <Dialog.Title as="h3" className="text-center text-xl -m-2 font-bold leading-9 tracking-tight text-white">
                      {configModal.title}
                    </Dialog.Title>

                    <p className="text-lg text-white my-8 text-center">{configModal.description}</p>

                    <div className="w-full h-fit flex flex-row space-x-2">
                      <ButtonOrange onClick={() => setOpen(false)} className="!w-full !py-1">
                        Cancelar
                      </ButtonOrange>
                      <ButtonGreen
                        onClick={() => configModal.onAccepted()}
                        className={clsx(configModal.type === 'default' && '!bg-darker !text-primary hover:!bg-white', configModal.type === 'delete' && '!bg-red-500 hover:!bg-white', '!w-full !py-1')}
                      >
                        {configModal.buttonText}
                      </ButtonGreen>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export function ItemsDropdown({ text, type, className, accept, onClick }: ItemsDropdownprops) {
  return (
    <div className={clsx(className, 'min-w-[13rem] max-w-full')}>
      <Menu.Item>
        {type === 'file' ? (
          <div className="w-full flex h-fit">
            <label htmlFor="file-upload" className="relative w-full cursor-pointer select-none my-1 py-2 px-4 hover:bg-secondary hover:text-tertiary text-white">
              <span>{text}</span>
              <input id="file-upload" name="file-upload" type="file" onChange={(e) => onClick && onClick(e)} accept={accept} className="sr-only" />
            </label>
          </div>
        ) : (
          <button type={type} onClick={(e) => onClick && onClick(e)} className="relative w-full cursor-pointer select-none my-1 py-2 px-4 hover:bg-secondary hover:text-tertiary text-white">
            <span className={`block truncate w-full font-normal`}>{text}</span>
          </button>
        )}
      </Menu.Item>
    </div>
  );
}

export function ItemsDropdownManual({ text, type, className, accept, id, onClick }: ItemsDropdownprops) {
  return (
    <div className={clsx(className, 'min-w-[13rem] max-w-full overflow-hidden')}>
      <div>
        {type === 'file' ? (
          <div className="w-full flex h-fit">
            <label htmlFor={id} className="block relative overflow-hidden w-full cursor-pointer select-none my-1 py-2 px-4 hover:bg-secondary hover:text-tertiary text-white">
              <span>{text}</span>
              <input id={id} name={id} type="file" onChange={(e) => onClick && onClick(e)} accept={accept} className="sr-only" />
            </label>
          </div>
        ) : (
          <button type={type} onClick={(e) => onClick && onClick(e)} className="relative w-full cursor-pointer select-none my-1 py-2 px-4 hover:bg-secondary hover:text-tertiary text-white">
            <span className={`block truncate w-full font-normal`}>{text}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export function ButtonDropdown({ text, position = 'bottom-right', className, children }: ButtonDropdownprops) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button type="button" className={clsx(className, 'bg-primary px-6 py-1 text-lg text-tertiary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-0')}>
          {text}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            position === 'bottom-right' && 'right-0 origin-top-right',
            position === 'bottom-left' && 'left-0 origin-top-left',
            position === 'bottom' && 'top-0 origin-top',
            position === 'top' && 'bottom-0 mb-12 right-0',
            'absolute z-30 mt-2 w-fit shadow-lg container-transparent overflow-hidden'
          )}
        >
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function ButtonDropdownManual({ text, disabled, position = 'bottom-right', open, className, children, setOpen }: ButtonDropdownpropsManual) {
  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen(!open)}
          className={clsx(
            className,
            disabled && 'cursor-not-allowed bg-primary/80 ',
            'bg-primary px-6 py-1 text-lg text-tertiary shadow-sm rounded-full hover:bg-white focus-visible:outline focus-visible:outline-0'
          )}
        >
          {text}
        </button>
      </div>
      <Transition
        as={Fragment}
        show={open}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={clsx(
            position === 'bottom-right' && 'right-0 origin-top-right',
            position === 'bottom-left' && 'left-0 origin-top-left',
            position === 'bottom' && 'top-0 origin-top',
            position === 'top' && 'bottom-0 mb-12 right-0',
            'absolute z-30 mt-2 w-fit shadow-lg container-transparent overflow-hidden'
          )}
        >
          {children}
        </div>
      </Transition>
    </div>
  );
}

export function AnyDropdown({ Element, children }: AnyDropdownprops) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex h-fit w-fit">
          <Element />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-30 right-0 mt-2 w-fit origin-top-right shadow-lg container-transparent">{children}</Menu.Items>
      </Transition>
    </Menu>
  );
}
