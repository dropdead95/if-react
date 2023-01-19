import React from 'react';

import { Container } from '../Container';
import { SliderHomes } from './SliderHomes';

import '../../scss/components/Homes.scss';
import { hotelsAPI } from '../../API';

export class HomesClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    hotelsAPI.getHotels().then(hotels => {
      this.setState({ hotels });
      this.setState({ isLoading: false });
    });
  }
  render() {
    return (
      <section className="homes">
        <Container className="homes__container">
          <h2 className="title-section">Homes Guests Loves</h2>
          <SliderHomes
            isLoading={this.state.isLoading}
            hotels={this.state.hotels}
          />
        </Container>
      </section>
    );
  }
}
