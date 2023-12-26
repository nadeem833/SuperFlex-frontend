import React from 'react';

const CustomLoadingScreen = () => {
  return (
    <div class="relative flex justify-center items-center h-screen w-full bg-black">
      <div class="absolute animate-spin rounded-full h-72 w-72 border-t-4 border-b-4 border-orange-500" />
      <img src="/assets/waiting-screen.svg" class="rounded-full h-64 w-64" />
    </div>
  );
};

export default CustomLoadingScreen;
