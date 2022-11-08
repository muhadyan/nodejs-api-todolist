const service = require("../service/index");

const CreateTodo = (req, res) => {
  const { activity_group_id, title } = req.body;

  if (!title) {
    return res.status(400).send({
      status: "Bad Request",
      message: "title cannot be null",
      data: {},
    });
  }

  if (!activity_group_id) {
    return res.status(400).send({
      status: "Bad Request",
      message: "activity_group_id cannot be null",
      data: {},
    });
  }

  service.CreateTodo(req, res);
};

const GetTodos = (req, res) => {
  service.GetTodos(req, res);
};

const GetTodo = (req, res) => {
  service.GetTodo(req, res);
};

const DeleteTodo = (req, res) => {
  service.DeleteTodo(req, res);
};

const UpdateTodo = (req, res) => {
  const { activity_group_id, title, is_active } = req.body;

  if (!title) {
    return res.status(400).send({
      status: "Bad Request",
      message: "title cannot be null",
      data: {},
    });
  }

  if (!activity_group_id) {
    return res.status(400).send({
      status: "Bad Request",
      message: "activity_group_id cannot be null",
      data: {},
    });
  }

  if (typeof is_active !== "boolean") {
    return res.status(400).send({
      status: "Bad Request",
      message: "is_active cannot be null",
      data: {},
    });
  }

  service.UpdateTodo(req, res);
};

module.exports = {
  CreateTodo,
  GetTodos,
  GetTodo,
  DeleteTodo,
  UpdateTodo,
};
