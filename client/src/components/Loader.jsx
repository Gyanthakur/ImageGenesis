import React from 'react';

const LoaderPage = () => {
  return (
    <div className="flex items-center justify-center h-5">
      <div className="relative w-8 h-8">
      
        <div className="absolute inset-1 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-3 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoaderPage;
