class addTodoApi {
  static createTodo(todo) {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        reject(1);
      }
      setTimeout(() => {
        console.log('new todo: ', todo);
        resolve();
      }, 1000);
    });
  }
}

export default addTodoApi;
