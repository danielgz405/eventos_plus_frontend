'use client';

import { CheckCircleIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import { GeneralInput } from 'app/ui/Common/Inputs';
import { Dispatch, SetStateAction } from 'react';
import { Filter } from '../SliderbarComponent';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

type props = {
  isClick: boolean;
  search: {
    startDate: string;
    endDate: string;
  };
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
  setIsClick: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<
    SetStateAction<{
      startDate: string;
      endDate: string;
    }>
  >;
};

export default function SearchBar({ search, isClick, filter, setFilter, setSearch, setIsClick }: props) {
  const routesNeeded = { dates: ['/sww/dashboard', '/sww/quotes', '/sww/tracking', '/sww/invoices'], saved: ['/sww/quotes'], is_invoices: ['/sww/quotes'] };
  const pathname = usePathname();
  return (
    <div className="bg-secondary py-1 rounded-3xl flex flex-col items-center">
      {routesNeeded.dates.includes(pathname) && (
        <div className="flex flex-row items-center w-full px-2">
          <GeneralInput
            value={search.startDate}
            onChange={(e) => setSearch({ ...search, startDate: e.target.value })}
            className="rounded-r-3xl h-10 !pr-1 border-secondary"
            id="startDate"
            name="startDate"
            type="date"
            placeHolder="Incio"
          />
          <GeneralInput
            value={search.endDate}
            onChange={(e) => setSearch({ ...search, endDate: e.target.value })}
            className="rounded-l-3xl h-10 !px-2"
            id="endDate"
            name="endDate"
            type="date"
            placeHolder="Fin"
          />
          <div className="w-fit">
            <MagnifyingGlassCircleIcon onClick={() => setIsClick(!isClick)} className="h-12 w-12 text-darker hover:text-white cursor-pointer rounded-full" />
          </div>
        </div>
      )}
      {routesNeeded.saved.includes(pathname) && (
        <div className="flex flex-row items-center justify-between w-full px-2 border-t border-tertiary mt-2 pt-2">
          <p className="ml-1 text-md font-semibold text-tertiary">Archivados</p>
          <CheckCircleIcon
            onClick={() => setFilter({ ...filter, saved: !filter.saved })}
            className={clsx(filter.saved && '!text-primary bg-darker rounded-full', 'text-darker h-9 w-9 cursor-pointer')}
          />
        </div>
      )}
      {routesNeeded.is_invoices.includes(pathname) && (
        <div className="flex flex-row items-center justify-between w-full px-2 pt-1 pb-2">
          <p className="ml-1 text-md font-semibold text-tertiary">Con factura</p>
          <CheckCircleIcon
            onClick={() => setFilter({ ...filter, is_invoice: !filter.is_invoice })}
            className={clsx(filter.is_invoice && '!text-primary bg-darker rounded-full', 'text-darker h-9 w-9 cursor-pointer')}
          />
        </div>
      )}
    </div>
  );
}
