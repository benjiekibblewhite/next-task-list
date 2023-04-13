import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export function TaskInputForm() {
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
          console.log(e.nativeEvent);
        }}
      >
        <Grid container spacing={3} mt={1}>
          <Grid item xs>
            <TextField
              variant="outlined"
              label="Title"
              fullWidth
              id="task-title"
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              label="Description"
              multiline
              fullWidth
              id="task-desription"
            />
          </Grid>
          <Grid item xs="auto">
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
