import React from 'react';

import Link from 'next/link';

export function Footer() {
  return (
    <>
      <div className=" bg-linear-pink-invert pb-12">
        <div className="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
          <Link href="/">
            <img
              className="w-28"
              src="https://res.cloudinary.com/cici/image/upload/v1617738023/util/logo-cici_trmlbe.jpg"
              alt="logo cici"
            />
          </Link>
          <div className="text-black flex flex-col md:items-center f-f-l pt-3">
            <h1 className="text-2xl font-black">Cici Beauty Place</h1>
            <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
              <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">
                <Link href="https://cici.beauty">
                  <a target="_blank">Tienda</a>
                </Link>
              </h2>
              <h2 className="cursor-pointer">
                <Link href="https://cici.beauty/login">
                  <a target="_blank">Iniciar sesion</a>
                </Link>
              </h2>
            </div>
            <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link href="/">Sobre Nosotros</Link>
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link href="/">Talleres</Link>
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link href="/">Cursos</Link>
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link href="/">Blog</Link>
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  <Link href="/">Ayuda</Link>
                </li>
                <li className="cursor-pointer pt-4 lg:py-0">
                  <Link href="/">Politicas de privacidad</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
