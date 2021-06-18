/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const ResumenCardProfile = () => (
  <div className="md:rounded-3xl overflow-hidden shadow-xl w-full md:max-w-xs my-3 bg-gray-700">
    <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
    <div className="flex justify-center -mt-8">
      <img
        src="https://i.imgur.com/8Km9tLL.jpg"
        className="rounded-full border-solid border-white border-2 -mt-3"
      />
    </div>
    <div className="text-center px-3 pb-6 pt-2">
      <h3 className="text-white text-sm bold font-sans">Olivia Dunham</h3>
      <p className="mt-2 font-sans font-light text-white">Hello, e from another the other side!</p>
    </div>
    <div className="flex justify-center pb-3 text-white">
      <div className="text-center mr-3 border-r pr-3">
        <h2>34</h2>
        <span>Photos</span>
      </div>
      <div className="text-center">
        <h2>42</h2>
        <span>Friends</span>
      </div>
    </div>
  </div>
);
