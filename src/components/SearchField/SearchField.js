import React, { Component } from 'react';
import FilterPill from 'src/components/FilterPill/FilterPill';
import search from 'src/assets/svgs/search.svg';
import Svg from 'src/components/Svg/Svg';
import SW from './SearchField.swiss';

export default class SearchField extends Component {
  render() {
    return (
      <SW.Wrapper>
        <SW.Input type="text" placeholder="Search" form="test" />
        <FilterPill />
        <Svg icon={search} size={24} />
      </SW.Wrapper>
    );
  }
}
