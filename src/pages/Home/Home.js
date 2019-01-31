import React, { Component } from 'react';
import SearchField from 'src/components/SearchField/SearchField';
import Map from 'src/components/Map/Map';
import MenuBar from 'src/components/MenuBar/MenuBar';
import logo from 'src/assets/svgs/Logo.svg';
import Svg from 'src/components/Svg/Svg';
import SW from './Home.swiss';

export default class Home extends Component {
  render() {
    return (
      <SW.Container>
        <SW.MapWrapper>
          <SW.TopBar>
            <Svg icon={logo} size={36} />
            <SearchField handleClick={this.toggleSearchOn} />
          </SW.TopBar>
          <Map />
        </SW.MapWrapper>
        {/* <MenuBar /> */}
      </SW.Container>
    );
  }
}
