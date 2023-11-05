import React from 'react';

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
        <section className="flex-1 text-yellow-400">{children}</section>
      </main>
    </>
  );
}

export default DashboardWrapper;
