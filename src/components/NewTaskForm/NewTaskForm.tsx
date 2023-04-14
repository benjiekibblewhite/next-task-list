import React from "react";
import { TaskInputForm } from "../TaskInputForm/TaskInputForm";
import { TaskValues, useTaskContext } from "@/context/tasks/TaskContext";
import { Paper, Typography } from "@mui/material";

export function NewTaskForm() {
  const { dispatch } = useTaskContext();

  function handleAddNewTask(payload: TaskValues) {
    dispatch({
      type: "ADD_TASK",
      payload,
    });
  }
  return (
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography variant="h4" align="center">
        Add New Task
      </Typography>
      <TaskInputForm handleSubmit={handleAddNewTask} />
    </Paper>
  );
}
