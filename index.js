import express from "express";
import tasks from "./routes/tasks.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use(express.json());

app.use("/tasks", tasks);

app.listen(port, () => {
  console.log("Server is running on http://localhost:3000");
});
