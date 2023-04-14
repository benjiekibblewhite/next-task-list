import { useTaskContext } from "@/context/tasks/TaskContext";
import { ACTION_TYPES, TaskValues } from "@/context/tasks/TaskContext.types";
import { Delete, Edit } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { TaskInputForm } from "../TaskInputForm/TaskInputForm";
import { TaskListItemProps } from "./TaskListItem.types";

export function TaskListItem({ task }: TaskListItemProps) {
  const [editMode, setEditMode] = useState(false);
  const { dispatch } = useTaskContext();

  function handleDeleteTask() {
    dispatch({
      type: ACTION_TYPES.DELETE_TASK,
      payload: task.id,
    });
  }

  function handleEditTask(payload: TaskValues) {
    dispatch({
      type: ACTION_TYPES.EDIT_TASK,
      payload: {
        ...payload,
        id: task.id,
        checked: task.checked,
      },
    });
    setEditMode(false);
  }

  function toggleTaskChecked() {
    dispatch({
      type: ACTION_TYPES.EDIT_TASK,
      payload: {
        ...task,
        checked: !task.checked,
      },
    });
  }

  return editMode ? (
    <TaskInputForm
      handleSubmit={handleEditTask}
      initialTitle={task.title}
      initialDescription={task.description}
    />
  ) : (
    <ListItem
      data-testid="list-item"
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
      <ListItemButton role={undefined} onClick={toggleTaskChecked}>
        <ListItemIcon>
          <Checkbox checked={task.checked} />
        </ListItemIcon>
        <ListItemText
          // TODO: strikethrough when checked
          style={{ textDecoration: task.checked ? "line-through" : "none" }}
          primary={task.title}
          secondary={<>{task.description}</>}
        />
      </ListItemButton>
    </ListItem>
  );
}
