import React, {
  createContext,
  useState,
  // Suspense,
  useRef
} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { CircleLoader } from 'react-spinners';
//
// import { TopSection } from '../TopSection';
// import { Homes } from '../Homes';
// import { Offer } from '../Offer/Offer';
// import { AvailableHotels } from '../AvailableHotels';

export const AppContext = createContext();

export const App = () => {
  const [context, setContext] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const availableHotelsRef = useRef(null);

  if (!isAuth) {
    return <Navigate to="sign-in" />;
  }

  return (
    <AppContext.Provider
      value={{
        context,
        setContext,
        availableHotelsRef,
        isAuth,
        setIsAuth
      }}
    >
      <Outlet />
      {/*<TopSection />*/}
      {/*<Suspense*/}
      {/*  fallback={*/}
      {/*    <CircleLoader*/}
      {/*      color="#1a71f4"*/}
      {/*      cssOverride={{*/}
      {/*        display: 'block',*/}
      {/*        margin: '20% auto'*/}
      {/*      }}*/}
      {/*      size="100px"*/}
      {/*    />*/}
      {/*  }*/}
      {/*>*/}
      {/*  {context.searchValue && (*/}
      {/*    <AvailableHotels ref={availableHotelsRef} />*/}
      {/*  )}*/}
      {/*</Suspense>*/}
      {/*<Offer />*/}
      {/*<Homes />*/}
    </AppContext.Provider>
  );
};
