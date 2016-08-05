// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import AppComponent from './components/AppComponent';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
    );
  }
}

export default App;
