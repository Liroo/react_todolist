import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { View } from 'react-native';
/**
* Just a basic wrapper for ReactTransitionGroup
* which by default try to use a span as default component
**/
class TransitionGroup extends Component {

  static propTypes = {
    ...View.propTypes,
  };

  render() {
    return <ReactTransitionGroup {...this.props} component={View} />;
  }
}

export default TransitionGroup;
