'use client';

import { useContext } from 'react';
import { PageContext } from 'app/ui/App/Layout/SliderbarComponent';
import DashboardComponet from 'app/ui/App/dashboard/DashboardComponent';

export default function PageDashBoard() {
  const search: any = useContext(PageContext);
  console.log(search);

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto">
      <DashboardComponet />
    </div>
  );
}
