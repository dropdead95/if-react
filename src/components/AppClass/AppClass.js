import React from 'react';

import { Sprite } from '../Sprite';
import { TopSectionClass } from '../TopSectionClass';
import { HomesClass } from '../HomesClass';
import { AvailableHotelsClass } from '../AvailableHotelsClass';

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableHotels: null,
      searchValue: '',
      isLoading: false
    };

    this.getAvailableHotels = this.getAvailableHotels.bind(this);
    this.getSearch = this.getSearch.bind(this);
  }

  getAvailableHotels(availableHotels) {
    this.setState({ availableHotels });
  }
  getSearch(searchValue) {
    this.setState({ searchValue });
  }

  render() {
    return (
      <>
        <Sprite />
        <TopSectionClass
          getSearch={this.getSearch}
          getAvailableHotels={this.getAvailableHotels}
          searchValue={this.state.searchValue}
          availableHotels={this.state.availableHotels}
        />
        {this.state.availableHotels && (
          <AvailableHotelsClass
            availableHotels={this.state.availableHotels}
          />
        )}
        <HomesClass />
      </>
    );
  }
}

export default AppClass;
