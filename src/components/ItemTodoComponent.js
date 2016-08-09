// @flow
import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Animated } from 'react-native';
import type { todoType } from '../types/todoType';
import { ITEM_LOADING, ITEM_ERROR, ITEM_OK } from '../types/todoType';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    minWidth: 110,
    minHeight: 60,
    paddingLeft: 30,
    paddingRight: 30,
  },
  label: {
    marginTop: 15,
    fontSize: 20,
  },
  toggle: {
    marginLeft: 40,
  },
});

type itemTodoProps = {
  todo: todoType,
  updateTodo: Function,
  addTodo: Function,
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
    const { todo, addTodo, updateTodo } = this.props;
    const isCompleted = todo.get('completed') ? '☑' : '☐';

    let backgroundColor = todo.get('completed') ? 'rgba(103, 142, 124, 0.89)' : 'rgba(80, 97, 112, 0.82)';
    if (todo.status !== ITEM_OK) {
      backgroundColor = todo.get('status') === ITEM_LOADING ? 'rgba(103, 142, 124, 0.26)' : backgroundColor;
      backgroundColor = todo.get('status') === ITEM_ERROR ? 'rgb(182, 80, 80)' : backgroundColor;
    }
    const height = this.state.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 65],
    });
    const opacity = this.state.animationValue;
    const animatedContainer = {
      height,
      opacity,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor,
      borderRadius: 5,
    };
    const UpdateLabel = () => Actions.UpdateLabel({ todo });
    return (
      <Animated.View style={animatedContainer}>
        <TouchableOpacity
          style={ [styles.container] }
          onPress={UpdateLabel}>
          <Text style={styles.label}>{todo.get('label')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ [styles.container] }
          onPress={() => {
            if (todo.get('status') === ITEM_OK) {
              updateTodo(todo.get('id'));
            } else {
              addTodo(todo.get('label'), todo.get('id'));
            }
          }
          }>
          <Text style={ [styles.label, styles.toggle] }>{todo.get('status') === ITEM_OK ? isCompleted : '↻'}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default ItemTodoComponent;
