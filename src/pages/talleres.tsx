import React from 'react';

import { PlayIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import { CardVideoHover } from '../components/card/CardVideHover';
import { CardVideoHorizontal } from '../components/card/CardVideoHorizontal';
import { CaroselMulti } from '../components/elements/carousel';
import { InputSearch } from '../components/elements/inputSearch';
import { ResenaVIdeo } from '../components/profile/reseñaVideo';
import { Main } from '../templates/Main';

const Talleres = () => (
  <Main>
    <section className="container m-auto p-3">
      <div className="mt-3 flex justify-center">
        <InputSearch />
      </div>

      <br />

      <ResenaVIdeo />

      <div className="flex justify-center md:justify-start mb-5 mt-5">
        <CardVideoHorizontal muted />
      </div>

      <div className="border-solid border-4 border-light-blue-500" />

      <br />

      <div className="flex justify-between">
        <h3 className="p-1 mb-4 font-bold">
          <Link href="/videos/categoria">
            <a href="/videos/categoria">Recientes</a>
          </Link>
        </h3>
        <button
          type="button"
          className="flex border border-gray-300 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        >
          Reproducir todo
          <PlayIcon className="h-6 w-6 ml-2" aria-hidden="true" />
        </button>
      </div>
      <CaroselMulti autoPlay={false}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((product) => (
          <div className="p-2" key={product}>
            <CardVideoHover />
          </div>
        ))}
      </CaroselMulti>

      <br />

      <div className="flex justify-between">
        <h3 className="p-1 mb-4 font-bold">
          <Link href="/videos/categoria">
            <a href="/videos/categoria">Categoria #1</a>
          </Link>
        </h3>
        <button
          type="button"
          className="flex border border-gray-300 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        >
          Reproducir todo
          <PlayIcon className="h-6 w-6 ml-2" aria-hidden="true" />
        </button>
      </div>
      <CaroselMulti autoPlay={false}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((product) => (
          <div className="p-2" key={product}>
            <CardVideoHover />
          </div>
        ))}
      </CaroselMulti>
    </section>
  </Main>
);

export default Talleres;
