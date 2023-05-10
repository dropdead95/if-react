import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import { App } from '../components/App/App';
import { HotelPage } from '../pages/HotelPage';
import { LayoutPage } from '../components/LayoutPage';
import { AuthPage } from '../pages/AuthPage';
// фывфыв

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<App />} />
        <Route path="hotels/:id" element={<HotelPage />} />
      </Route>
      <Route path="sign-in" element={<AuthPage />} />
    </>
  )
);
