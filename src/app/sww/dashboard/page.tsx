'use client';

import { useContext } from 'react';
import { PlaceHolderHamster } from 'app/ui/Common/PlaceHolders';
import { PageContext } from 'app/ui/App/Layout/SliderbarComponent';

export default function PageDashBoard() {
  const search: any = useContext(PageContext);
  console.log(search);

  return (
    <div className="h-full w-full flex justify-center items-center px-48">
      <PlaceHolderHamster title="Proximamente modulo dashboard aqui" />
    </div>
  );
}
