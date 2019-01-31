import React, { Component } from 'react';
import FilterPill from 'src/components/FilterPill/FilterPill';
import SW from './SearchField.swiss';

export default class SearchField extends Component {
  render() {
    return (
      <SW.Wrapper>
        <form id="test">
          <SW.Input type="text" placeholder="Search" form="test" />
        </form>
        <FilterPill />
        <SW.Icon src="assets/icons/search.svg" />
      </SW.Wrapper>
    );
  }
}
