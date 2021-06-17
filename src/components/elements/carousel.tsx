import React, { ReactNode } from 'react';

import Carousel from 'react-multi-carousel';

import { responsiveCarousel } from '../../helpers/responsiveCarousel';

interface Props {
  children: ReactNode;
  autoPlay: boolean;
}

export const CaroselMulti = ({ children, autoPlay }: Props) => (
  <Carousel responsive={responsiveCarousel} autoPlay={autoPlay} infinite autoPlaySpeed={2500}>
    {children}
  </Carousel>
);
