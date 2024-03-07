import express from "express";
import TaskController from "../controllers/TaskController.js";

const router = express.Router();

/* GET programming languages. */
router.get("/all", TaskController.getAll);
router.get("/:id", TaskController.getById);

router.post("/", TaskController.createTask);

router.put("/", TaskController.updateTask);

router.delete("/:id", (req, res) => {
  res.status(200).send("MARK");
});

export default router;
