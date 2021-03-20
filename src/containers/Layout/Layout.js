import React from "react";
import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ToDoList from '../../components/ToDoList/TodoList';
import ToDoForm from '../../components/ToDoForm/ToDoForm';
import ToDoModal from '../../components/ToDoModal/ToDoModal';

//import MenuIcon from '@material-ui/icons/MenuIcon';

const Layout = (props) => {




  

  
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h6">To do list</Typography>
        </Toolbar>
      </AppBar>
      <Container>
         <ToDoForm/>
         <ToDoList/> 
      </Container>
      <ToDoModal/>
    </React.Fragment>
  );
};

export default Layout;
