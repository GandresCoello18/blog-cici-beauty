import React from 'react';

import { PlayIcon } from '@heroicons/react/outline';

import { ResenaVIdeo } from '../../../components/profile/reseñaVideo';
import { Video } from '../../../components/video';
import { AddComment } from '../../../components/video/AddComment';
import { CommnetVideo } from '../../../components/video/commentVideo';
import { Main } from '../../../templates/Main';

const ContentVideo = () => (
  <Main>
    <section className="container m-auto md:mt-3">
      <div className="md:flex justify-center">
        <div className="p-2 w-full">
          <Video />
          <ResenaVIdeo />

          <div className="flex justify-center mt-3">
            <div className="bg-white shadow-xl rounded-lg w-full">
              <ul className="divide-y divide-gray-300">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <li
                    key={item}
                    className="p-4 hover:bg-gray-50 cursor-pointer flex justify-between"
                  >
                    Chothi list ni item Chothi list ni item Chothi list ni item
                    <PlayIcon className="h-6 w-6" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="p-2 w-full">
          <h3 className="p-1 font-bold">Actividades</h3>

          <div className="mt-3 mb-3">
            <AddComment />
          </div>

          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div className="mt-2" key={item}>
              <CommnetVideo />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Main>
);

export default ContentVideo;
