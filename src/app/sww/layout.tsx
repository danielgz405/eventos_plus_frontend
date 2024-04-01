'use client';

import { useAuth } from 'Hooks/useAuth';
import SliderbarComponent, { Filter } from 'app/ui/App/Layout/SliderbarComponent';
import { getDatesByCurrentMonth } from 'app/ui/utils/datesGenerator';
import { ReactNode, useState } from 'react';

type props = {
  children: ReactNode;
};

export default function RootLayout({ children }: props) {
  const [search, setSearch] = useState(getDatesByCurrentMonth());
  const [isClick, setIsClick] = useState(false);
  const [filter, setFilter] = useState<Filter>({
    saved: false,
    is_invoice: false,
  });
  const auth = useAuth();

  return (
    <div className="relative isolate h-screen overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <SliderbarComponent auth={auth} search={search} isClick={isClick} filter={filter} setFilter={setFilter} setSearch={setSearch} setIsClick={setIsClick}>
        {children}
      </SliderbarComponent>
      <div className="absolute inset-x-0 top-[calc(65%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(75%-30rem)]" aria-hidden="true">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
