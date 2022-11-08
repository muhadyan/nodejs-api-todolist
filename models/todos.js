module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "todos",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      activity_group_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "activity_groups",
          key: "id",
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      priority: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "very-high",
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "todos",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
