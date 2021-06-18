/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { CardValue } from '../components/card/CardValue';
import { CardVideoHorizontal } from '../components/card/CardVideoHorizontal';
import { ResumenCardProfile } from '../components/profile/resumenProfile';
import { Main } from '../templates/Main';

const Profile = () => (
  <Main>
    <section className="container m-auto">
      <div className="md:flex justify-center">
        <div>
          <ResumenCardProfile />
        </div>
        <div className="m-auto">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((item) => (
              <CardValue key={item} />
            ))}
          </div>
        </div>
      </div>

      <h3 className="p-1 font-bold mt-5" style={{ fontSize: 20 }}>
        Vistos reciente
      </h3>
      <div className="mt-5">
        {[0, 1].map((item) => (
          <div key={item} className="w-full mb-4 flex justify-center md:justify-between">
            <CardVideoHorizontal preview muted />
          </div>
        ))}
      </div>
    </section>
  </Main>
);

export default Profile;
