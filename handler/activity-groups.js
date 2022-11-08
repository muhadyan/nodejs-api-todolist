const service = require("../service/index");

const CreateActivityGroup = (req, res) => {
  const { title, email } = req.body;
  if (!title) {
    return res.status(400).send({
      status: "Bad Request",
      message: "title cannot be null",
      data: {},
    });
  }

  if (!email) {
    return res.status(400).send({
      status: "Bad Request",
      message: "email cannot be null",
      data: {},
    });
  }

  service.CreateActivityGroup(req, res);
};

const GetActivityGroups = (req, res) => {
  service.GetActivityGroups(req, res);
};

const GetActivityGroup = (req, res) => {
  service.GetActivityGroup(req, res);
};

const DeleteActivityGroup = (req, res) => {
  service.DeleteActivityGroup(req, res);
};

const UpdateActivityGroup = (req, res) => {
  const { title, email } = req.body;
  if (!title) {
    return res.status(400).send({
      status: "Bad Request",
      message: "title cannot be null",
      data: {},
    });
  }

  if (!email) {
    return res.status(400).send({
      status: "Bad Request",
      message: "email cannot be null",
      data: {},
    });
  }

  service.UpdateActivityGroup(req, res);
};

module.exports = {
  CreateActivityGroup,
  GetActivityGroups,
  GetActivityGroup,
  DeleteActivityGroup,
  UpdateActivityGroup,
};
