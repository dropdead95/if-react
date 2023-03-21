import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const SystemLayoutContext = createContext();

export const SystemLayout = () => {
  const [context, setContext] = useState({});
  console.log(context);

  return (
    <SystemLayoutContext.Provider
      value={{
        context,
        setContext
      }}
    >
      <Outlet />
    </SystemLayoutContext.Provider>
  );
};
