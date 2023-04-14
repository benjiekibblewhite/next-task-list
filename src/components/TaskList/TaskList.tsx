import { Paper, Typography } from "@mui/material";
import React from "react";
import { TaskListItem } from "../TaskListitem/TaskListItem";
import { useTaskContext } from "@/context/tasks/TaskContext";

export function TaskList() {
  const {
    state: { tasks },
  } = useTaskContext();
  return (
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography variant="h4" align="center">
        Tasks
      </Typography>
      {tasks.map((item) => (
        <TaskListItem task={item} key={item.id} />
      ))}
    </Paper>
  );
}
