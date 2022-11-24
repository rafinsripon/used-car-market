import React from "react";

const Spinner = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <p className="text-7xl font-thin">L</p>
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      <p className="text-7xl font-thin">ading....</p>
    </div>
  );
};

export default Spinner;
