import React from 'react';

import { Pagination } from '../components/elements/pagination';
import { ItemNotificacion } from '../components/notificaciones/ItemNotificacion';
import { Main } from '../templates/Main';

const Notificaciones = () => (
  <Main>
    <section className="container m-auto p-3">
      <div className="mt-3">
        <div className="p-2 border-b-2 flex justify-between">
          <span style={{ fontSize: 17 }}>Tus Notificaciones</span>
          <span style={{ fontSize: 13 }} className="text-pink-400 cursor-pointer">
            Marcar todo como leido
          </span>
        </div>

        {[0, 1, 2, 3, 4].map((item) => (
          <a href="sdd" target="_blank">
            <ItemNotificacion item={item} />
          </a>
        ))}

        <br />

        <Pagination />
      </div>
    </section>
  </Main>
);

export default Notificaciones;
