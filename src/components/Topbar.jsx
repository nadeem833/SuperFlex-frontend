import React from 'react';

function Topbar() {
  const isSignedIn = true;
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-yellow-200 px-6 py-3">
      <a href="/" className="flex items-center gap-4">
        <img src="/assets/SuperflexLogo.svg" alt="logo" />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </a>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          {isSignedIn ? (
            <div className="flex cursor-pointer gap-3">
              <img src="/logout.svg" alt="user" />
              <div className="bg-[#121417] border rounded-full p-1">
                <img src="/user.svg" alt="user" className="rounded-full" />
              </div>
            </div>
          ) : (
            <div className="flex cursor-pointer">
              <button className="">Sign In</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
