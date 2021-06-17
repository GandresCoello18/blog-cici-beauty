/* eslint-disable max-len */
import React from 'react';

import Link from 'next/link';

import { CardVideoHorizontal } from '../../components/card/CardVideoHorizontal';
import { Progress } from '../../components/elements/Progress';
import { CommnetVideo } from '../../components/video/commentVideo';
import { Main } from '../../templates/Main';

const ContentVideos = () => (
  <Main>
    <section className="container m-auto md:mt-3">
      <div className="md:flex justify-center">
        <div className="p-2 w-full">
          <h3 className="p-1 font-bold">Serie de videos</h3>

          <Progress />

          {[0, 1, 2, 3, 4, 5, 6].map((item) => (
            <Link href={`/videos/categoria/${item}`}>
              <a href={`/videos/categoria/${item}`}>
                <div className="mt-3 w-full flex justify-center" key={item}>
                  <CardVideoHorizontal preview />
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="p-2 w-full">
          <h3 className="p-1 font-bold">Actividades</h3>

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

export default ContentVideos;
