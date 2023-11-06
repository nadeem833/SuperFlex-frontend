import React from 'react';

import DashboardTopBar from '../components/DashboardTopBar';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function DashboardWrapper({ children }) {
  return (
    <>
      <main className="block laptop:hidden">
        <Topbar />
        {children}
      </main>

      <main className="hidden laptop:flex laptop:flex-row bg-black items-center h-screen w-screen">
        <Sidebar />
        <section className="flex-1 flex flex-col h-full">
          <DashboardTopBar />
          <div className="flex-auto flex flex-col">{children}</div>
        </section>
      </main>
    </>
  );
}

export default DashboardWrapper;
