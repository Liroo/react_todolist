// @flow
import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';


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

type addTodoProps = {
  label?: string,
  addTodo: Function,
};

type stateType = {
  value: string,
};

class addTodoComponent extends Component {
  props: addTodoProps;
  state: stateType = {
    value: '',
  };
  onSubmit: Function;
  onEdit: Function;

  constructor(props: addTodoProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(text: string) {
    this.setState({
      value: text,
    });
  }

  onSubmit() {
    this.props.addTodo(this.state.value);
    this.setState({
      value: '',
    });
  }

  render() {
    const { label } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.value}
          onChangeText={this.onEdit}
          onSubmitEditing={this.onSubmit}
          placeholder={label}
          placeholderTextColor="rgba(72, 128, 163, 0.91)" />
      </View>
    );
  }
}

export default addTodoComponent;
