const express = require("express");
const router = express.Router();

const handler = require('../handler/index')

router.post("/activity-groups", handler.CreateActivityGroup);
router.get("/activity-groups", handler.GetActivityGroups);
router.get("/activity-groups/:id", handler.GetActivityGroup);
router.delete("/activity-groups/:id", handler.DeleteActivityGroup);
router.patch("/activity-groups/:id", handler.UpdateActivityGroup);

router.post("/todo-items", handler.CreateTodo);
router.get("/todo-items", handler.GetTodos);
router.get("/todo-items/:id", handler.GetTodo);
router.delete("/todo-items/:id", handler.DeleteTodo);
router.patch("/todo-items/:id", handler.UpdateTodo);

module.exports = router;
