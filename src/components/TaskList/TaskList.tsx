import {
  Button,
  Collapse,
  Grid,
  List,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useMemo, useState } from "react";
import { TaskListItem } from "../TaskListitem/TaskListItem";
import { useTaskContext } from "@/context/tasks/TaskContext";
import { TransitionGroup } from "react-transition-group";
export function TaskList() {
  const [filterBy, setFilterBy] = useState<string>();
  const {
    state: { tasks },
  } = useTaskContext();

  const tasksToShow = useMemo(() => {
    return tasks.filter((item) => {
      if (!filterBy) return true;
      return (
        item.description.includes(filterBy) || item.title.includes(filterBy)
      );
    });
  }, [tasks, filterBy]);

  return (
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography variant="h4" align="center">
        Tasks
      </Typography>
      <Grid container spacing={3} my={1}>
        <Grid item xs>
          <TextField
            fullWidth
            label="Filter Tasks"
            id="filter-tasks"
            value={filterBy || ""}
            onChange={(e) => {
              setFilterBy(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs="auto">
          <Button disabled={!filterBy} onClick={() => setFilterBy(undefined)}>
            Clear
          </Button>
        </Grid>
      </Grid>
      <List>
        <TransitionGroup>
          {tasksToShow.map((item) => (
            <Collapse key={item.id}>
              <TaskListItem task={item} />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </Paper>
  );
}
