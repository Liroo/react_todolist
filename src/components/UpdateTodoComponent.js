// @flow
import React, { Component } from 'react';
import { TextInput, StyleSheet, View, BackAndroid } from 'react-native';
import type { todoType } from '../types/todoType';
import { Actions } from 'react-native-router-flux';
import Button from './ButtonComponent';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderColor: 'rgb(158, 158, 158)',
    borderWidth: 2,
    borderRadius: 3,
  },
  input: {
    height: 60,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

type updateTodoProps = {
  actions: Object,
  updateLabelTodo: Function,
  todo: todoType,
};

type stateType = {
  value: string,
};

class UpdateTodoComponent extends Component {
  props: updateTodoProps;
  state: stateType = {
    value: '',
  };
  onSubmit: Function;
  onEdit: Function;
  onDelete: Function;

  constructor(props: updateTodoProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', Actions.pop);
  }

  onEdit(text: string) {
    this.setState({
      value: text,
    });
  }

  onSubmit() {
    const { actions } = this.props;
    actions.updateLabelTodo(this.props.todo.get('id'), this.state.value);
    Actions.pop();
  }

  onDelete() {
    const { todo, actions } = this.props;
    actions.deleteTodo(todo.get('id'));
    Actions.pop();
  }

  render() {
    const { todo } = this.props;
    return (
      <View style={{ paddingTop: 57 }}>
        <View style={styles.container}>
            <TextInput
              autoFocus={true}
              style={styles.input}
              value={this.state.value}
              onChangeText={this.onEdit}
              onSubmitEditing={this.onSubmit}
              placeholder={todo.get('label')}
              placeholderTextColor="rgba(72, 128, 163, 0.91)" />
            <Button
              onPress={this.onDelete}
              highlight={false}
              label="Delete" />
          </View>
        </View>
    );
  }
}

export default UpdateTodoComponent;
