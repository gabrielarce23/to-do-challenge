import React, { useState } from "react";
import useStore from "../../store/todo-store";

import TextField from "@material-ui/core/TextField";

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
    <Grid style={{marginTop: '2%'}} container direction="row" justify="center" alignItems="center">
      <TextField style={{width: '50%'}}
        label="Enter to do title and press tab..."
        value={title}
        onChange={changeHandler}
        onBlur={onBlurHandler}
      />
    </Grid>
  );
};

export default ToDoForm;
