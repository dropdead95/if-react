import React from 'react';

import { Container } from '../Container';

import { offerData } from './offerData';

export const Offer = () => {
  return (
    <section className="offer">
      <Container className="offer__container">
        <h1 className="offer__title">What do we offer</h1>
        <ul className="offer__features row">
          {offerData.map(({ image, title }) => (
            <li
              key={title}
              className="col-lg-3 col-md-6 col-sm-3 col-xs-4 features__support features__item"
            >
              <svg className="item__img">
                <use href={image}></use>
              </svg>

              <h2 className="features__subtitle">{title}</h2>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
