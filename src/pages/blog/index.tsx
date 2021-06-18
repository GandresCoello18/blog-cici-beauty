import React from 'react';

import Link from 'next/link';

import { HeaderBlog } from '../../components/blog/headerBlog';
import { CardBlog } from '../../components/card/CardBlog';
import { Pagination } from '../../components/elements/pagination';
import { Main } from '../../templates/Main';

const Blog = () => (
  <Main>
    <HeaderBlog />
    <section className="sm:flex justify-around p-4">
      <h3 className="font-bold" style={{ fontSize: 23 }}>
        Posts
      </h3>
      <div className="mt-4 sm:mt-0">
        <input
          className="shadow appearance-none border-pink-300 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Buscar"
        />
      </div>
    </section>

    <div className="container m-auto grid sm:grid-cols-1 xl:grid-cols-3 pt-6 gap-8 mt-7 p-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <Link key={item} href="/blog/test">
          <a href="/blog/test" className="text-current">
            <CardBlog />
          </a>
        </Link>
      ))}
    </div>

    <Pagination />
  </Main>
);

export default Blog;
