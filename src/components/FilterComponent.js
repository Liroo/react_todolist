// @flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './ButtonComponent';
import { FILTER_ALL, FILTER_COMPLETE, FILTER_INCOMPLETE } from '../types/filterType';

type filterProps = {
  actions: {
    allFilter: Function,
    completeFilter: Function,
    incompleteFilter: Function,
  },
  filterStatus: string,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

class FilterComponent extends Component {
  props: filterProps;

  render() {
    const { actions, filterStatus } = this.props;
    return (
      <View style={styles.container}>
        <Button
          onPress={actions.allFilter}
          label="All"
          highlight={filterStatus === FILTER_ALL} />
        <Button
          onPress={actions.completeFilter}
          label="Complete"
          highlight={filterStatus === FILTER_COMPLETE} />
        <Button
          onPress={actions.incompleteFilter}
          label="Incomplete"
          highlight={filterStatus === FILTER_INCOMPLETE} />
      </View>
    );
  }
}

export default FilterComponent;
