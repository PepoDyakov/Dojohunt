import React, { PureComponent } from 'react';
import { styleSheet } from 'swiss-react';
import 'src/swiss/';

const SW = styleSheet('App', {
  Wrapper: {
    _size: '100%',
  },
});

export default class App extends PureComponent {
  render() {
    return <SW.Wrapper>test</SW.Wrapper>;
  }
}
