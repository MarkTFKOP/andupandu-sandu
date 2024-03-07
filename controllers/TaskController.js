import taskList from "../model/tasks.js";
import Responder from "../utils/response.utils.js";

const getAll = (req, res) => {
  try {
    return Responder.successs(res, taskList);
  } catch (error) {
    return Responder.error(res, error);
  }
};

const getById = (req, res) => {
  try {
    const { id } = req.params;
    const curr = taskList.find((task) => task.id === id);
    return Responder.successs(res, curr);
  } catch (error) {
    return Responder.error(res, error);
  }
};

const createTask = (req, res) => {
  try {
    const body = req.body;
    taskList.push(body);
    return Responder.successs(res, taskList);
  } catch (error) {
    return Responder.error(res, error);
  }
};

const updateTask = (req, res) => {
  try {
    const { id } = req.body;
    const index = taskList.findIndex((task) => task.id === id);
    taskList[index] = req.body;
    return Responder.successs(res, taskList);
  } catch (error) {
    return Responder.error(res, error);
  }
};

const deleteTask = (req, res) => {
  try {
    const { id } = req.params;
    const index = taskList.findIndex((task) => task.id === id);

    if (index !== -1) {
      taskList.splice(index, 1);
      return Responder.successs(res, taskList, "Task Deleted Successfully");
    } else {
      console.log("Task not found");
      return Responder.successs(res, taskList, "Task Not Found");
    }
  } catch (error) {
    return Responder.error(res, error);
  }
};

export default {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
};
