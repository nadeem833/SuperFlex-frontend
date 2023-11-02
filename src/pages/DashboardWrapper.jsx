import React from 'react';

function DashboardWrapper({ children }) {
  return <div className="w-screen h-screen bg-red-200">{children}</div>;
}

export default DashboardWrapper;
