'use client';

import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

export interface InputListSchemas {
  [key: string]: any;
  name: string;
}

type GeneralInputprops = {
  id: string;
  name: string;
  type: string | 'textarea';
  autoComplete?: string;
  disabled?: boolean;
  step?: string;
  required?: boolean;
  className?: string;
  placeHolder?: string;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void;
};

type Listprops = {
  value: InputListSchemas;
  items: InputListSchemas[];
  disabled?: boolean;
  className?: string;
  placeHolder?: string;
  required?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: InputListSchemas) => void;
};

export function GeneralInput({ id, name, type, autoComplete, disabled, step, required, className, placeHolder, value, onChange }: GeneralInputprops) {
  return (
    <>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeHolder}
          autoComplete={autoComplete}
          disabled={disabled}
          title={`${placeHolder} ${required ? '(*)' : ''}`}
          required={required}
          value={value}
          onChange={(e) => (onChange ? onChange(e) : {})}
          className={clsx(
            disabled && '!bg-secondary/80 cursor-not-allowed',
            className ? className : '',
            'focus:ring-inset border-none focus:ring-transparent ring-inset text-base focus:ring-0 pl-5 w-full placeholder:text-base py-2 bg-darker placeholder:text-gray-400 text-gray-200 rounded-3xl ring-0'
          )}
        />
      ) : (
        <input
          id={id}
          name={name}
          placeholder={placeHolder}
          type={type}
          autoComplete={autoComplete}
          disabled={disabled}
          step={step}
          required={required}
          title={`${placeHolder} (${required ? '*' : ''})`}
          value={value}
          onChange={(e) => (onChange ? onChange(e) : {})}
          className={clsx(
            disabled && '!bg-secondary/80 cursor-not-allowed',
            className ? className : '',
            'focus:ring-inset border-none focus:ring-transparent ring-inset text-base focus:ring-0 pl-5 w-full placeholder:text-base py-2 bg-darker placeholder:text-gray-400 text-gray-200 rounded-full ring-0'
          )}
        />
      )}
    </>
  );
}

export function InputList({ value, items, placeHolder, disabled, required, className, onChange }: Listprops) {
  const [query, setQuery] = useState('');

  const filteredItems = query === '' ? items : items.filter((item) => item.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')));

  return (
    <div className="w-full">
      <Combobox value={value} onChange={(e) => !disabled && onChange(e)}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            {disabled && <span className="absolute w-full h-full top-0 z-20 cursor-not-allowed" />}
            <Combobox.Input
              className={clsx(
                disabled && '!bg-secondary/80 cursor-not-allowed',
                className ? className : '',
                'focus:ring-inset border-none focus:ring-transparent ring-inset text-base focus:ring-0 pl-5 w-full placeholder:text-base py-2 bg-darker placeholder:text-gray-400 text-gray-200 rounded-full ring-0'
              )}
              required={required}
              title={`${placeHolder} (${required ? '*' : ''})`}
              placeholder={placeHolder}
              displayValue={(item: InputListSchemas) => item.name}
              onChange={(event) => setQuery(event.target.value)}
            />

            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center z-10 pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-tertiary" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>
            <Combobox.Options className="absolute mt-3 max-h-60 w-full z-50 overflow-auto rounded-3xl container-transparent py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredItems.length === 0 ? (
                <div className="relative cursor-default select-none px-4 py-2 text-white">No se encontro ninguno.</div>
              ) : (
                filteredItems.map((item, idx) => (
                  <Combobox.Option key={idx} className={({ active }) => `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-secondary text-tertiary' : 'text-white'}`} value={item}>
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item.name}</span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-tertiary' : 'text-secondary'}`}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
