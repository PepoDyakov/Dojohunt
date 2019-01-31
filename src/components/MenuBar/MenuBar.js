import React, { Component } from 'react';
import MenuBarOption from 'src/components/MenuBarOption/MenuBarOption';
import SW from './MenuBar.swiss';

export default class MenuBar extends Component {
  render() {
    return (
      <SW.Wrapper>
        <SW.Topbar>
          <SW.TopbarItem>Martial Arts</SW.TopbarItem>
          <SW.TopbarItem>Rehab</SW.TopbarItem>
        </SW.Topbar>
        <SW.OptionsWrapper>
          <MenuBarOption option="Combat Sports" />
          <MenuBarOption logo="assets/icons/distance.svg" option="Distances" />
        </SW.OptionsWrapper>
        <SW.MoreOptions>More options</SW.MoreOptions>
        <SW.LoginOptions>
          <SW.LoginButton>Sign In</SW.LoginButton>
          <SW.LoginButton orange>Sign Up</SW.LoginButton>
        </SW.LoginOptions>
      </SW.Wrapper>
    );
  }
}
