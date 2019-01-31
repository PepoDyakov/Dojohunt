import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SW from './Svg.swiss';

export default class Svg extends PureComponent {
  render() {
    const { icon, size, color } = this.props;
    const Comp = icon;
    return (
      <SW.Wrapper size={size} color={color}>
        <Comp />
      </SW.Wrapper>
    );
  }
}
