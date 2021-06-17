import React from 'react';

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
        <CardVideoHorizontal />
      </div>

      <div className="border-solid border-4 border-light-blue-500" />

      <br />

      <h3 className="p-1 mb-4 font-bold">Recientes</h3>
      <CaroselMulti autoPlay={false}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((product) => (
          <div className="p-2" key={product}>
            <CardVideoHover />
          </div>
        ))}
      </CaroselMulti>

      <br />

      <h3 className="p-1 mb-4 font-bold">Categoria #1</h3>
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
