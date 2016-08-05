// @flow
import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type filterProps = {
  onPress: Function,
  label: string,
  highlight: boolean,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
    minWidth: 110,
    minHeight: 60,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: 20,
  },
});

class ButtonComponent extends Component {
  props: filterProps;

  render() {
    const { onPress, label, highlight } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: highlight ? 'rgba(40, 150, 30, 0.74)' : 'rgba(213, 37, 37, 0.64)' }] }
        onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonComponent;
