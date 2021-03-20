import React from "react";
import useStore from "../../store/todo-store";
import Grid from "@material-ui/core/Grid";
import Todo from './ToDo/ToDo';

const TodoList = (props) => {
  const todos = useStore((state) => state.todos);

  const todoItems = todos.map((todo) => (
   <Todo todo={todo} key={todo.id}/>
  ));
  return (
    <Grid container spacing={4} style={{marginTop: '5%'}}>
      {todoItems}
    </Grid>
  );
};

export default TodoList;
