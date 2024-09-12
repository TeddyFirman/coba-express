const Todos = require("../database");

class TodoModel {
  static async addOne(payload) {
    Todos.push(payload);

    return payload;
  }

  static async findById(id) {
    return Todos.find((todo) => todo.id === id);
  }
}

module.exports = TodoModel;
