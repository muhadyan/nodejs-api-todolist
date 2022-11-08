const DataTypes = require("sequelize").DataTypes;

const _activity_group = require("./activity-groups");
const _todo = require("./todos");

function initModels(sequelize) {
  const ActivityGroup = _activity_group(sequelize, DataTypes);
  const Todo = _todo(sequelize, DataTypes);

  Todo.belongsTo(ActivityGroup, {
    as: "activity_group",
    foreignKey: "activity_group_id",
  });
  ActivityGroup.hasMany(Todo, {
    as: "todos",
    foreignKey: "activity_group_id",
  });

  return { ActivityGroup, Todo };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
