import React from 'react';

import { HeaderBlog } from '../../components/blog/headerBlog';
import { ContainerBadge } from '../../components/elements/contaierBadge';
import Share from '../../components/elements/share';
import { AddComment } from '../../components/video/AddComment';
import { CommnetVideo } from '../../components/video/commentVideo';
import { Main } from '../../templates/Main';

const styles = {
  subTitle: {
    fontSize: 22,
  },
};

const TestPost = () => (
  <Main>
    <HeaderBlog />
    <section className="mt-10 md:flex justify-center p-2">
      <div className="w-full md:w-2/5">
        <article className="mb-5 border-b-4">
          <p className="p-1 mb-4">
            En Platzi empezamos una gran renovación para la Escuela de JavaScript. También abrimos
            inscripciones para JS Challenge a partir del 17 de Junio hasta el 2 de Julio.
          </p>

          <h2 className="font-bold border-b py-4" style={styles.subTitle}>
            Qué es JavaScript Fullstack
          </h2>

          <p className="p-1 mt-4">
            El concepto FullStack en realidad es bastante abstracto. Aunque no es un término
            perfectamente bien aplicado, en la práctica se refiere a dominar un stack completo de
            programación, tanto frontend como backend.
          </p>

          <p className="p-1 mt-4">
            Esto es mucho más fácil gracias a JavaScript, el único lenguaje de programación que
            funciona de forma nativa en los navegadores web para desarrollo frontend, aunque también
            nos permite hacer desarrollo backend con Node.js.
          </p>

          <br />

          <div className="md:flex justify-between">
            <div className="mb-3 md:mb-0">
              <ContainerBadge />
            </div>
            <Share />
          </div>
        </article>

        <div className="mt-5">
          <AddComment />

          <br />

          {[0, 1, 2, 3, 4].map((item) => (
            <div key={item} className="mb-3">
              <CommnetVideo />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Main>
);

export default TestPost;
