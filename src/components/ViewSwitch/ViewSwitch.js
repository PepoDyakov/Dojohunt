import React, { Component } from "react";
import SW from "./ViewSwitch.swiss";

export default class ViewSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  handleClick = key => () => {
    // manipulating the state
    const { selected } = this.state;
    if (key !== selected) {
      this.setState({
        selected: key
      });
    }
  };
  render() {
    console.log(this.state);
    return (
      <SW.Wrapper>
        <SW.IconWrapper onClick={this.handleClick(0)} key="0">
          <SW.Icon />
        </SW.IconWrapper>
        <SW.IconWrapper onClick={this.handleClick(1)} key="1">
          <SW.Icon />
        </SW.IconWrapper>
      </SW.Wrapper>
    );
  }
}
