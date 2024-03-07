import taskList from "../model/tasks.js";

const getAll = (req, res) => {
  try {
    return res.status(200).json(taskList);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getById = (req, res) => {
  try {
    const { id } = req.params;
    const curr = taskList.find((task) => task.id === id);
    return res.status(200).json(curr);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const createTask = (req, res) => {
  try {
    const body = req.body;
    taskList.push(body);

    return res.status(200).json(taskList);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateTask = (req, res) => {
  try {
    const { id } = req.body;
    const index = taskList.findIndex((task) => task.id === id);
    taskList[index] = req.body;
    return res.status(200).json(taskList);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteTask = (req, res) => {
  try {
    const { id } = req.params;
    return res.status(200).json(taskList);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
};
