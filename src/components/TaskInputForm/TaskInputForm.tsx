import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { TaskInputFormProps } from "./TaskInputForm.types";

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
            inputProps={{ "data-testid": "task-title" }}
            value={title ?? ""}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <TextField
            variant="outlined"
            label="Description"
            multiline
            fullWidth
            id="task-description"
            inputProps={{ "data-testid": "task-description" }}
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
  );
}
