import taskRoutes from "./tasks.js";
import express from "express";

const router = express.Router();

router.get("/get", (req, res) => {
  res.send("HYE");
});

router.post("/getAll", (req, res) => {
  res.send("HYE");
});
module.exports = router;
