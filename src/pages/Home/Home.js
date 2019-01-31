import React, { Component } from 'react';
import SearchField from 'src/components/SearchField/SearchField';
import Map from 'src/components/Map/Map';
import SW from './Home.swiss';

export default class Home extends Component {
  render() {
    return (
      <SW.Container>
        <SW.MapWrapper>
          <SW.TopBar>
            <SW.Logo src="./assets/icons/Logo.svg" />
            <SearchField handleClick={this.toggleSearchOn} />
          </SW.TopBar>
          <Map />
        </SW.MapWrapper>
      </SW.Container>
    );
  }
}
