import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={1141}
    height={420}
    viewBox="0 0 1141 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="13" y="1" rx="0" ry="0" width="296" height="296" />
    <rect x="9" y="451" rx="6" ry="6" width="280" height="25" />
    <rect x="14" y="317" rx="0" ry="0" width="296" height="28" />
    <rect x="14" y="365" rx="0" ry="0" width="296" height="28" />
  </ContentLoader>
);
