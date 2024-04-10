'use client';

import { useContext } from 'react';
import { PageContext, Search } from 'app/ui/App/Layout/SliderbarComponent';
import DashboardComponet from 'app/ui/App/Dashboard/DashboardComponent';

export default function PageDashBoard() {
  const search: Search = useContext(PageContext);
  console.log(search.auth);

  return (
    <div className="p-4">
      <DashboardComponet auth={search.auth} />
    </div>
  );
}
