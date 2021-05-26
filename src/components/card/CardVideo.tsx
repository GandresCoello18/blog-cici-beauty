import React from 'react';

export const CardVideo = () => (
  <div className="m-auto">
    <div className="p-2 mb-5 grid grid-cols grid-rows grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="col-span-3 row-span-4 p-1 m-1">
        <a href="#">
          <img
            src="https://picsum.photos/640/400/?random"
            alt="Placeholder"
            className="rounded-t-xl object-cover h-48 w-full"
          />
        </a>
      </div>

      <div className="col-span-3 row-span-1">
        <div className="flex align-bottom flex-col leading-none p-2 md:p-4">
          <div className="flex flex-row justify-between items-center">
            <a className="flex items-center no-underline hover:underline text-black" href="#">
              <img
                alt="Placeholder"
                className="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              />
              <span className="ml-2 text-sm"> John Doe </span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-span-3 row-span-1">
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              Title
            </a>
          </h1>
          <p className="text-grey-darker text-sm">9 min ago</p>
        </header>
      </div>
    </div>
  </div>
);
