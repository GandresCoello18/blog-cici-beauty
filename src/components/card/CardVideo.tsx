/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

export const CardVideo = () => (
  <div className="m-auto">
    <div className="p-2 mb-5 grid grid-cols grid-rows grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="col-span-3 row-span-4 p-1 m-1">
        <a href="#">
          <video autoPlay loop muted className="rounded-t-xl object-cover h-48 w-full">
            <source src="/images/localstorage.mp4" type="video/mp4" />
          </video>
        </a>
      </div>

      <div className="col-span-3 row-span-1">
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              Talleres y aplicacion de productos
            </a>
          </h1>
        </header>
      </div>

      <div className="col-span-3 row-span-1">
        <div className="flex align-bottom flex-col leading-none p-2 md:p-4">
          <div className="flex flex-row justify-between items-center">
            <a className="flex items-center no-underline hover:underline text-black" href="#">
              <div className="flex -space-x-1 overflow-hidden">
                {[0, 1, 2].map((item) => (
                  <img
                    key={item}
                    alt="Placeholder"
                    className="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                ))}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
