import {
  ACTION_TYPES,
  Task,
  TaskValues,
  useTaskContext,
} from "@/context/tasks/TaskContext";
import { Delete, Edit } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { TaskInputForm } from "../TaskInputForm/TaskInputForm";

interface ITaskListItemProps {
  task: Task;
}

export function TaskListItem({ task }: ITaskListItemProps) {
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { dispatch } = useTaskContext();
  const handleDeleteTask = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.DELETE_TASK,
      payload: task.id,
    });
  }, [task, dispatch]);

  function handleEditTask(payload: TaskValues) {
    dispatch({
      type: ACTION_TYPES.EDIT_TASK,
      payload: {
        ...payload,
        id: task.id,
      },
    });
    setEditMode(false);
  }

  return editMode ? (
    <TaskInputForm
      handleSubmit={handleEditTask}
      initialTitle={task.title}
      initialDescription={task.description}
    />
  ) : (
    <ListItem
      secondaryAction={
        <>
          <IconButton>
            <Edit onClick={() => setEditMode(true)} />
          </IconButton>
          <IconButton onClick={handleDeleteTask}>
            <Delete />
          </IconButton>
        </>
      }
    >
      <ListItemButton
        role={undefined}
        onClick={() => setChecked((checked) => !checked)}
      >
        <ListItemIcon>
          <Checkbox checked={checked} />
        </ListItemIcon>
        <ListItemText
          primary={task.title}
          secondary={<>{task.description}</>}
        />
      </ListItemButton>
    </ListItem>
  );
}
