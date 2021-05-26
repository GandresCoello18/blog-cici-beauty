/* eslint-disable react/no-unused-prop-types */
import React, { ReactNode } from 'react';

import { Footer } from '../components/footer';
import { NavBar } from '../components/nav';

interface IMainProps {
  children: ReactNode;
}

export const Main = ({ children }: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    <NavBar />
    {children}
    <Footer />
  </div>
);
