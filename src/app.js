// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Scene } from 'react-native-router-flux';

import AppComponent from './components/AppComponent';
import updateTodoContainer from './containers/updateTodoContainer';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene title="Todo App" key="Home" component={AppComponent} initial={true}/>
            <Scene title="Update" component={updateTodoContainer} key="UpdateLabel" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default App;
