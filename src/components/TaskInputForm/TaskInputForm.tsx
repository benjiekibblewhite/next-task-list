import { TaskValues, useTaskContext } from "@/context/tasks/TaskContext";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface TaskInputFormProps {
  handleSubmit: (payload: TaskValues) => void;
  initialTitle?: string;
  initialDescription?: string;
}

export function TaskInputForm({
  handleSubmit,
  initialTitle,
  initialDescription,
}: TaskInputFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  function submitForm() {
    if (title && description) {
      handleSubmit({ title, description });
      setTitle(undefined);
      setDescription(undefined);
    }
  }

  return (
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography variant="h4" align="center">
        Add New Task
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <Grid container spacing={3} mt={1}>
          <Grid item xs>
            <TextField
              variant="outlined"
              label="Title"
              fullWidth
              id="task-title"
              value={title ?? ""}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              label="Description"
              multiline
              fullWidth
              id="task-desription"
              value={description ?? ""}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="contained"
              type="submit"
              disabled={!title || !description}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
