/* eslint-disable max-len */
import React from 'react';

export const CommnetVideo = () => (
  <div className="w-full rounded-lg shadow-lg p-4">
    <div className="flex">
      <img
        alt="Placeholder"
        className="block rounded-full mr-2"
        src="https://picsum.photos/32/32/?random"
      />
      <span className="font-semibold tracking-wide">Juan sebastian</span>
    </div>
    <p className="text-gray-500 my-1">
      The link will be available for 24 hours. Lorem ipsum dolor sit, amet, consectetur adipisicing
      elit. Nesciunt, sequi!
    </p>
    <div className="mt-2">
      <a href="#" className="text-blue-700  inline-flex items-center font-semibold tracking-wide">
        <span className="hover:underline">Responder</span>
        <span className="text-xl ml-2">&#8594;</span>
      </a>
    </div>
  </div>
);
