import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppContext } from '../../components/App/App';

export const ContextLayout = () => {
  return (
    <AppContext.Provider>
      <Outlet />
    </AppContext.Provider>
  );
};
