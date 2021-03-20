import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

import Checkbox from "@material-ui/core/Checkbox";
import { Box } from "@material-ui/core";

import useStore from "../../../store/todo-store";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  completed: {
    color: "white",
    backgroundColor: "#009688",
  },
});

const ToDo = (props) => {

  const classes = useStyles();
  //const [checked, setChecked] = useState(props.todo.completed);
  const completeTodo = useStore((state) => state.completeTodo);
  const editTodo = useStore((state) => state.editTodo)

  const handleChange = (event) => {
    completeTodo(props.todo.id);
  };


  

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper className={props.todo.completed ? classes.completed : null}>
        <Box
          component="div"
          display="flex"
          flexDirection="row"
          alignItems="center"
          p={1}
          m={1}
        >
          <Box width="90%" component="div">
            <Typography variant="h5" noWrap onClick={() => editTodo(props.todo)}>
              {props.todo.title}
            </Typography>
          </Box>
          <Box>
            <Checkbox
              checked={props.todo.completed}
              onChange={handleChange}
              color="secondary"
            />
          </Box>
        </Box>
        <Box component="div" p={1} m={1}>
          <ReactMarkdown
            plugins={[gfm]}
            noWrap
            children={props.todo.description}
          />
        </Box>

        {/*  <Typography variant="body2" component="p">
          {props.todo.description}
        </Typography> */}
      </Paper>
    </Grid>
  );
};

export default ToDo;
