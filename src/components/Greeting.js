import React from 'react';
import { useLocation } from 'react-router-dom';
import abcGif from './abc.gif';  // Import the gif from the components folder

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Greeting = () => {
  const query = useQuery();
  const name = query.get('name');

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4 md:p-8">
      <div className="text-center bg-white bg-opacity-80 p-6 md:p-10 lg:p-16 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 md:mb-6 lg:mb-8 animate-pulse">Happy Friendship Day!</h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700">{name}</p>
        <div className="mt-4 md:mt-6 lg:mt-8">
          <img
            src={abcGif}
            alt="Friendship Day Gif"
            className="mx-auto rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
