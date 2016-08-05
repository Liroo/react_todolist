// @flow
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import AddTodoContainer from '../containers/addTodoContainer';
import ListTodoContainer from '../containers/listTodoContainer';
import FilterContainer from '../containers/filterContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class AppComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <AddTodoContainer label="Add Todo !" />
        <FilterContainer />
        <ListTodoContainer />
      </View>
    );
  }
}

export default AppComponent;
