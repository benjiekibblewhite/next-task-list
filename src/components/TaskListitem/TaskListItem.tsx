import { ACTION_TYPES, useTaskContext } from "@/context/tasks/TaskContext";
import { TaskValues } from "@/context/tasks/TaskContext.types";
import { Delete, Edit } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useCallback, useState } from "react";
import { TaskInputForm } from "../TaskInputForm/TaskInputForm";
import { TaskListItemProps } from "./TaskListItem.types";

export function TaskListItem({ task }: TaskListItemProps) {
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
      disableGutters
      secondaryAction={
        <>
          <IconButton onClick={() => setEditMode(true)}>
            <Edit color="action" />
          </IconButton>
          <IconButton onClick={handleDeleteTask}>
            <Delete color={"primary"} />
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
          // TODO: strikethrough when checked
          primary={task.title}
          secondary={<>{task.description}</>}
        />
      </ListItemButton>
    </ListItem>
  );
}
