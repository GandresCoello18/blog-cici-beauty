import React from 'react';

import { CardVideo } from '../components/card/CardVideo';
import { Main } from '../templates/Main';

const Index = () => (
  <Main>
    <div className="container m-auto grid sm:grid-cols-1 md:grid-cols-3 pt-6 gap-8">
      {[1, 2, 3].map((item) => (
        <CardVideo key={item} />
      ))}
    </div>
  </Main>
);

export default Index;
