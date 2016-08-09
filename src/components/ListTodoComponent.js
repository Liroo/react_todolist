// @flow
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FILTER_COMPLETE, FILTER_INCOMPLETE } from '../types/filterType';
import ItemTodoComponent from './ItemTodoComponent';
import ReactTransitionGroup from './TransitionGroup';

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(109, 116, 71, 0.1)',
    borderWidth: 3,
    margin: 15,
    borderRadius: 4,
    height: 365,
  },
});

type listTodoProps = {
  todos: Object,
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
        updateTodo={actions.updateTodo}
        addTodo={actions.addTodo}
        key={todo.get('id')} />
    );
  }

  render() {
    const todos = this.props.todos.filter((todo) => {
      if (this.props.filterStatus === FILTER_COMPLETE && !todo.get('completed') ||
      this.props.filterStatus === FILTER_INCOMPLETE && todo.get('completed')) {
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
