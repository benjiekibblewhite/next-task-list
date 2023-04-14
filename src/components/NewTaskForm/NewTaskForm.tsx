import React from "react";
import { TaskInputForm } from "../TaskInputForm/TaskInputForm";
import { TaskValues, useTaskContext } from "@/context/tasks/TaskContext";

export function NewTaskForm() {
  const { dispatch } = useTaskContext();

  function handleAddNewTask(payload: TaskValues) {
    dispatch({
      type: "ADD_TASK",
      payload,
    });
  }
  return <TaskInputForm handleSubmit={handleAddNewTask} />;
}
