import React from 'react';

import { ClockIcon, ChatAlt2Icon } from '@heroicons/react/outline';
import Link from 'next/link';

export const HeaderBlog = () => (
  <section
    className="Hero is-cover"
    style={{
      backgroundImage:
        'url(https://static.platzi.com/media/blog/cover-blog-dom-7be64be7-a252-4ef5-b539-64d1f0a39a6f.png)',
    }}
    data-reactid="174"
  >
    <div className="row u-row-wrapper" data-reactid="175">
      <div className="p-2 bg-gray-900 bg-opacity-20" data-reactid="184">
        <h1
          className="text-left text-white font-bold"
          style={{ fontSize: '2em' }}
          data-reactid="197"
        >
          <Link href="/blog/test">
            <a href="/blog/test/" className="text-white no-underline" data-reactid="198">
              DOM vs. Virtual DOM | ¿Cuál es la mejor estrategia de render en el navegador?
            </a>
          </Link>
        </h1>
        <div className="flex justify-between mt-3" data-reactid="199">
          <div className="flex mt-2" data-reactid="201">
            <figure data-reactid="202">
              <img
                alt="juandc"
                className="block rounded-full"
                src="https://static.platzi.com/media/avatars/avatars/juandc_1b459d86-0a25-47da-bd4a-e86049fb0902.png"
                height="30"
                width="30"
                data-reactid="203"
              />
            </figure>
            <span data-reactid="204" className="ml-3 font-medium">
              juandc
            </span>
          </div>
          <div className="md:flex p-3" data-reactid="200">
            <time className="flex mr-3" data-reactid="205">
              <ClockIcon className="block h-6 w-6" aria-hidden="true" />
              <span data-reactid="207" className="ml-1">
                hace 5 horas
              </span>
            </time>
            <div className="flex" data-reactid="208">
              <ChatAlt2Icon className="block h-6 w-6" aria-hidden="true" />
              <span data-reactid="210">
                <span data-reactid="211" className="ml-1">
                  2 comentarios
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
