import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'src/pages/Home/Home';
import SW from './App.swiss';
import 'src/swiss/';

export default class App extends PureComponent {
  render() {
    return (
      <SW.Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </SW.Wrapper>
    );
  }
}
