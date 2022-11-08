const initModels = require("../models/init-models");
const { sequelize } = require("../config/db");

const models = initModels(sequelize);

async function CreateTodo(req, res) {
  try {
    const { title, activity_group_id } = req.body;
    const now = new Date();

    const data = await models.Todo.create({
      activity_group_id: activity_group_id,
      title: title,
      created_at: now,
      updated_at: now,
    });

    return res.status(200).send({
      status: "Success",
      message: "Success",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Internal Sever Error",
      message: error.message,
      data: {},
    });
  }
}

async function GetTodos(req, res) {
  try {
    const { activity_group_id } = req.query;

    let filter = { deleted_at: null };
    if (activity_group_id) {
      filter.activity_group_id = activity_group_id;
    }

    let data = await models.Todo.findAll({
      where: filter,
    });

    data.forEach((e) => {
      e.is_active = e.is_active === true ? "1" : "0";
    });

    return res.status(200).send({
      status: "Success",
      message: "Success",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Internal Sever Error",
      message: error.message,
      data: {},
    });
  }
}

async function GetTodo(req, res) {
  try {
    const { id } = req.params;

    const data = await models.Todo.findOne({
      where: { id: id, deleted_at: null },
    });
    if (!data) {
      return res.status(404).send({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
        data: {},
      });
    }

    data.is_active = data.is_active === true ? "1" : "0";

    return res.status(200).send({
      status: "Success",
      message: "Success",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Internal Sever Error",
      message: error.message,
      data: {},
    });
  }
}

async function DeleteTodo(req, res) {
  try {
    const { id } = req.params;

    const now = new Date();
    const data = await models.Todo.update(
      { deleted_at: now },
      { where: { id } }
    );

    if (data[0] === 0) {
      return res.status(404).send({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
        data: {},
      });
    }

    return res.status(200).send({
      status: "Success",
      message: "Success",
      data: {},
    });
  } catch (error) {
    return res.status(500).send({
      status: "Internal Sever Error",
      message: error.message,
      data: {},
    });
  }
}

async function UpdateTodo(req, res) {
  try {
    const { id } = req.params;
    const { title, activity_group_id, is_active } = req.body;
    const now = new Date();

    const updated = await models.Todo.update(
      {
        activity_group_id: activity_group_id,
        title: title,
        is_active: is_active,
        updated_at: now,
      },
      { where: { id: id, deleted_at: null } }
    );

    if (updated[0] === 0) {
      return res.status(404).send({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
        data: {},
      });
    }

    const data = await models.Todo.findOne({
      where: { id: id, deleted_at: null },
    });
    data.is_active = data.is_active === true ? "1" : "0";

    return res.status(200).send({
      status: "Success",
      message: "Success",
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Internal Sever Error",
      message: error.message,
      data: {},
    });
  }
}

module.exports = {
  CreateTodo,
  GetTodos,
  GetTodo,
  DeleteTodo,
  UpdateTodo,
};
