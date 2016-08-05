// @flow
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Animated } from 'react-native';
import type { todoType } from '../types/todoType';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    minWidth: 110,
    minHeight: 60,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  label: {
    fontSize: 20,
  },
});

type itemTodoProps = {
  todo: todoType,
  completeTodo: Function,
  incompleteTodo: Function,
};

type itemTodoState = {
  animationValue: Animated.Value,
};

class ItemTodoComponent extends Component {
  props: itemTodoProps;
  state: itemTodoState =  {
    animationValue: new Animated.Value(0),
  };

  componentDidEnter() {
    Animated.timing(this.state.animationValue, { toValue: 1 }).start();
  }

  componentWillLeave(done: Function) {
    Animated.timing(this.state.animationValue, { toValue: 0 }).start(done);
  }
  render() {
    const { todo, completeTodo, incompleteTodo } = this.props;
    let isCompleted = todo.completed ? '☑' : '☐';

    const height = this.state.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 65],
    });
    const opacity = this.state.animationValue;
    const animatedContainer = {
      height,
      opacity,
    };
    return (
      <Animated.View style={animatedContainer}>
        <TouchableOpacity
          style={ [styles.container, { backgroundColor: todo.completed ? 'rgba(103, 142, 124, 0.89)' : 'rgba(80, 97, 112, 0.82)' }] }
          onPress={() => {
            if (todo.completed) {
              incompleteTodo(todo.id);
            } else {
              completeTodo(todo.id);
            }
          }}>
          <Text style={styles.label}>{todo.label}</Text>
          <Text style={styles.label}>{isCompleted}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default ItemTodoComponent;
