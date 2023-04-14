import React from "react";
import { TaskInputForm } from "../TaskInputForm/TaskInputForm";
import { useTaskContext } from "@/context/tasks/TaskContext";
import { Paper, Typography } from "@mui/material";
import { ACTION_TYPES, TaskValues } from "@/context/tasks/TaskContext.types";

export function NewTaskForm() {
  const { dispatch } = useTaskContext();

  function handleAddNewTask(payload: TaskValues) {
    dispatch({
      type: ACTION_TYPES.ADD_TASK,
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
