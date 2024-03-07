import tasksArray from "./tasks.json" assert { type: "json" };

export const status = {
  OPEN: "open",
  INPROGRESS: "in_progress",
  COMPLETE: "completed",
};

export const priority = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

export const tasks = [
  {
    id: "1",
    name: "TASK A",
    description: "TASK A must complete by tomm",
    status: status.OPEN,
    priority: priority.LOW,
  },
  {
    id: "2",
    name: "TASK B",
    description: "TASK A must complete by tomm",
    status: status.INPROGRESS,
    priority: priority.MEDIUM,
  },
  {
    id: "3",
    name: "TASK A",
    description: "TASK A must complete by tomm",
    status: status.COMPLETE,
    priority: priority.HIGH,
  },
];

export default tasksArray;
