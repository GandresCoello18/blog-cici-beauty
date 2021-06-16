import React from 'react';

import { CardVideoHorizontal } from '../components/card/CardVideoHorizontal';
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
    </section>
  </Main>
);

export default Talleres;
