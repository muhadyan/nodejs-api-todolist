const initModels = require("../models/init-models");
const { sequelize } = require("../config/db");

const models = initModels(sequelize);

async function CreateActivityGroup(req, res) {
  try {
    const { title, email } = req.body;
    const now = new Date();

    const data = await models.ActivityGroup.create({
      title: title,
      email: email,
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

async function GetActivityGroups(req, res) {
  try {
    const data = await models.ActivityGroup.findAll({
      where: { deleted_at: null },
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

async function GetActivityGroup(req, res) {
  try {
    const { id } = req.params;

    const data = await models.ActivityGroup.findOne({
      where: { id: id, deleted_at: null },
    });
    if (!data) {
      return res.status(404).send({
        status: "Not Found",
        message: `Activity with ID ${id} Not Found`,
        data: {},
      });
    }

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

async function DeleteActivityGroup(req, res) {
  try {
    const { id } = req.params;

    const now = new Date();
    const data = await models.ActivityGroup.update(
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

async function UpdateActivityGroup(req, res) {
  try {
    const { id } = req.params;
    const { title, email } = req.body;
    const now = new Date();

    const updated = await models.ActivityGroup.update(
      {
        title: title,
        email: email,
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

    const data = await models.ActivityGroup.findOne({
      where: { id: id, deleted_at: null },
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

module.exports = {
  CreateActivityGroup,
  GetActivityGroups,
  GetActivityGroup,
  DeleteActivityGroup,
  UpdateActivityGroup,
};
