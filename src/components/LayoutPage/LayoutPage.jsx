import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';
import { Sprite } from '../Sprite';

export const LayoutPage = () => {
  return (
    <>
      <Sprite />
      <Outlet />
      <Footer />
    </>
  );
};
