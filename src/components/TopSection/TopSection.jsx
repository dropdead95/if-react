import React from 'react';

import { Container } from '../Container';
import { Menu } from './Menu/Menu';
import { Form } from './Form';

import background from './../../assets/top-section/bg-top-section.jpg';

//icons
import {
  Logo,
  Profile,
  SwitchTheme,
  AppStore,
  GooglePlay
} from '../../icons';

//style
import '../../scss/components/TopSection.scss';

export class TopSection extends React.Component {
  render() {
    return (
      <section
        className="top-section"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Container className="top-section__container">
          <div className="top-section__header">
            <Logo />
            <Menu />
            <SwitchTheme />
            <Profile />
          </div>
          <div className="top-section__content">
            <h1 className="content__title">
              <span>Discover stays</span>{' '}
              <span>to live, work or just relax</span>
            </h1>
            <Form
              value={this.props.value}
              setValue={this.props.setValue}
              hotels={this.props.hotels}
              setAvailableHotels={this.props.setAvailableHotels}
            />
            <div className="content__download">
              <GooglePlay />
              <AppStore />
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
