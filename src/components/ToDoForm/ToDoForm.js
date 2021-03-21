import React, { useState } from "react";
import useStore from "../../store/todo-store";

import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";

const ToDoForm = (props) => {
  const [title, setTitle] = useState("");
  const addTodo = useStore((state) => state.addTodo);

  const changeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBlurHandler = () => {
    if (title.trim().length > 0) {
      addTodo({ title: title, description: "", completed: false });
    }
  };
  return (
    <Grid
      style={{ marginTop: "2%" }}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Box width={350}>
        <TextField
          label="Enter to do title and press tab..."
          value={title}
          onChange={changeHandler}
          onBlur={onBlurHandler}
          fullWidth
        />
      </Box>
    </Grid>
  );
};

export default ToDoForm;
