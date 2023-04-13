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
import React from "react";

export function TaskListItem({ task }) {
  const [checked, setChecked] = React.useState(false);

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
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
