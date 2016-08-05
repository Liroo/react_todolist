// @flow
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import type { todoType } from '../types/todoType';
import { FILTER_COMPLETE, FILTER_INCOMPLETE } from '../types/filterType';
import ItemTodoComponent from './ItemTodoComponent';
import ReactTransitionGroup from './TransitionGroup';

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(109, 116, 71, 0.1)',
    borderWidth: 3,
    margin: 20,
    borderRadius: 4,
    height: 415,
  },
});

type listTodoProps = {
  todos: Array<todoType>,
  filterStatus: string,
  actions: Object,
};

class ListTodoComponent extends Component {
  props: listTodoProps;
  renderRow: Function;

  constructor(props: listTodoProps) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(todo: todoType) {
    const { actions } = this.props;
    return (
      <ItemTodoComponent
        todo={todo}
        completeTodo={actions.completeTodo}
        incompleteTodo={actions.incompleteTodo}
        key={todo.id} />
    );
  }

  render() {
    const todos = this.props.todos.filter((todo) => {
      if (this.props.filterStatus === FILTER_COMPLETE && !todo.completed) {
        return false;
      } else if (this.props.filterStatus === FILTER_INCOMPLETE && todo.completed) {
        return false;
      }
      return true;
    });
    return (
      <View style={styles.container}>
        <ScrollView>
          <ReactTransitionGroup>
            {todos.map(this.renderRow)}
          </ReactTransitionGroup>
        </ScrollView>
      </View>
    );
  }
}

export default ListTodoComponent;
