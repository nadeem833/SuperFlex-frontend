import React from 'react';

import DashboardTopBar from '../components/DashboardTopBar';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function DashboardWrapper({ children }) {
  return (
    <>
      <main className="laptop:hidden flex flex-col bg-black min-h-screen p-3">
        <Topbar />
        <DashboardTopBar />
        <div className="flex-1 mt-4">{children}</div>
      </main>

      <main className="hidden laptop:flex laptop:flex-row bg-black items-center h-screen w-screen">
        <Sidebar />
        <section className="flex-1 flex flex-col h-full px-12">
          <DashboardTopBar />
          <div className="flex-auto flex flex-col w-full">{children}</div>
        </section>
      </main>
    </>
  );
}

export default DashboardWrapper;
