import React from 'react';
import classNames from 'classnames';

import style from './Container.module.scss';

export const Container = ({ children, className }) => {
  return (
    <div className={classNames(style.container, className)}>
      {children}
    </div>
  );
};
