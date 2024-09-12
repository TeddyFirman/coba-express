const TodoModel = require("../model/todo");


class TodoController {

  async createTodo(req, res) {
    try {
      const createdTodo = await TodoModel.addOne(req.body);

      return res.status(201).send({
        success: true,
        data: createdTodo,
        error: null,
      });
    } catch (error) {
      console.log(error);
      return res.send({
        success: false,
        data: null,
        error,
      });
    }
  }

  async getById(req, res) {
    try {
      const findedTodo = await TodoModel.findById(req.params.id);

      if (!findedTodo) {
        return res.status(404).send({
          success: true,
          data: null,
          error: "Todo not found",
        });
      }

      return res.send({
        success: true,
        data: createdTodo,
        error: null,
      });
    } catch (error) {
      return res.send({
        success: false,
        data: null,
        error,
      });
    }
  }
}

module.exports = TodoController;
