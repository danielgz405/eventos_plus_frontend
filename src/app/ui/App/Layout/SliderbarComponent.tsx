'use client';

import { AuthSchema } from 'api/auth/auth';
import Navigation from './Sliderbar/Navigation';
import SearchBar from './Sliderbar/SearchBar';
import UserBar from './Sliderbar/UserBar';
import { usePathname } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction, createContext } from 'react';

export interface Filter {
  saved: boolean;
  is_invoice: boolean;
}

export interface Search {
  filter: Filter;
  search: {
    startDate: string;
    endDate: string;
  };
  setSearch: Dispatch<
    SetStateAction<{
      startDate: string;
      endDate: string;
    }>
  >;
  isClick: boolean;
}
export const PageContext = createContext({} as Search);

type props = {
  auth: AuthSchema;
  isClick: boolean;
  search: {
    startDate: string;
    endDate: string;
  };
  children: ReactNode;
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

export default function SliderbarComponent({ auth, search, filter, isClick, children, setFilter, setSearch, setIsClick }: props) {
  const routesNeededSearch = ['/sww/dashboard', '/sww/quotes', '/sww/tracking', '/sww/invoices'];
  const pathname = usePathname();

  return (
    <PageContext.Provider value={{ search, setSearch, isClick, filter } as Search}>
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="w-[20vw] h-screen overflow-y-auto">
          <div className="py-5 pl-5 space-y-5">
            <Navigation />
            {routesNeededSearch.includes(pathname) && <SearchBar search={search} filter={filter} isClick={isClick} setFilter={setFilter} setIsClick={setIsClick} setSearch={setSearch} />}
            <UserBar auth={auth} />
          </div>
        </div>
        <div className="w-[80vw] h-screen p-5">
          <div className="container-transparent overflow-hidden h-full">{children}</div>
        </div>
      </div>
    </PageContext.Provider>
  );
}
