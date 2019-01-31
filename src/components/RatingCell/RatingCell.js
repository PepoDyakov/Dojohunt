import React, { Component } from "react";
import SW from "./RatingCell.swiss";

export default class RatingCell extends Component {
  render() {
    return (
      <SW.Wrapper>
        Rating Category
        <SW.Icon />
      </SW.Wrapper>
    );
  }
}
