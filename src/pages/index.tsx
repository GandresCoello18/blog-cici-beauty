/* eslint-disable max-len */
import React from 'react';

import Link from 'next/link';
import Carousel from 'react-multi-carousel';

import { CardBlog } from '../components/card/CardBlog';
import { CardVideo } from '../components/card/CardVideo';
import { Recomendacion } from '../components/elements/recomendacion';
import { responsiveCarousel } from '../helpers/responsiveCarousel';
import { Main } from '../templates/Main';

const fixResponsive = {
  ...responsiveCarousel,
  desktop: {
    breakpoint: { max: 3000, min: 924 },
    items: 1,
  },
};

const Index = () => (
  <Main>
    <div className="container m-auto grid sm:grid-cols-1 lg:grid-cols-3 pt-6 gap-8 mt-7">
      {[1, 2, 3].map((item) => (
        <CardVideo key={item} />
      ))}
    </div>
    <div className="container text-center md:text-right">
      <Link href="/talleres">
        <a href="/talleres">Ver más talleres</a>
      </Link>
    </div>

    <div className="container m-auto grid sm:grid-cols-1 xl:grid-cols-3 pt-6 gap-8 mt-7 p-3">
      {[1, 2, 3].map((item) => (
        <Link href="/blog/test">
          <a href="/blog/test" className="text-gray-700">
            <CardBlog key={item} />
          </a>
        </Link>
      ))}
    </div>
    <div className="container text-center md:text-right">
      <Link href="/blog">
        <a href="/blog">Ver más post</a>
      </Link>
    </div>

    <div className="w-full m-auto bg-cici-100 grid grid-cols-1 md:grid-cols-2 pt-6 gap-8 mt-7 p-4">
      <div className="p-3 mb-5 rounded-lg">
        <div className="p-1 m-1">
          <img
            src="/images/local-cici.png"
            alt="local fisico de cici beauty place"
            className="rounded-t-xl bg-white object-cover p-3 w-auto float-right"
          />
        </div>
      </div>

      <div className="p-2 mb-5">
        <div className="p-1 m-1 w-full md:w-96">
          <h2 className="p-2 text-center text-white font-bold" style={{ fontSize: 30 }}>
            ¿Que hacemos en Cici Beauty Place?
          </h2>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit? Aperiam illo,
            vel ratione nobis provident ipsam magni debitis fuga porro repellat voluptas maxime,
            quis tempora autem placeat fugit ullam.
          </p>

          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit? Aperiam illo,
            vel ratione nobis provident ipsam magni debitis fuga porro repellat voluptas maxime,
            quis tempora autem placeat fugit ullam.
          </p>

          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit? Aperiam illo.
          </p>
        </div>
      </div>
    </div>

    <div className="w-full m-auto bg-white grid grid-cols-1 md:grid-cols-2 pt-6 gap-8 mt-7 p-4">
      <div className="p-2 mb-5">
        <div className="p-1 m-1 w-full md:w-96 float-right">
          <h2 className="p-2 text-center text-cici-300 font-bold" style={{ fontSize: 30 }}>
            ¡Síguenos en Instagram!
          </h2>
          <p className="p-3">
            En Instagram podemos tener un contacto permanente. En esta red social subo historias
            diarias, publico mis pensamientos y recomendaciones a través de post y comparto videos
            que pueden ser de mucha utilidad para ti. ¡Te veo ahí!
          </p>
        </div>
      </div>

      <div className="p-3 mb-5 rounded-lg">
        <div className="p-1 m-1">
          <img
            src="/images/profile-inst.png"
            alt="local fisico de cici beauty place"
            className="rounded-t-xl bg-white object-cover p-3 w-auto float-left"
          />
        </div>
      </div>
    </div>

    <div className="container m-auto p-4 bg-cici-100">
      <Carousel autoPlay responsive={fixResponsive} infinite autoPlaySpeed={2500}>
        <Recomendacion />
      </Carousel>
    </div>
  </Main>
);

export default Index;
