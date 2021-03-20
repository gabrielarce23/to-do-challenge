import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import useStore from "../../store/todo-store";

const ToDoModal = (props) => {


  const editedTodo = useStore(state => state.editedTodo);
  const editTodo = useStore(state => state.editTodo);
  const putTodo = useStore(state => state.putTodo)



  const handleClose = () => {
      editTodo(null)
  }

  const handleConfirm = () => {
    putTodo(editedTodo);
  }

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={!!editedTodo}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit to do</DialogTitle>
      <DialogContent>
        <DialogContentText>Please edit your to do...</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Title"
          value = {editedTodo ? editedTodo.title: ''}
          onChange = {(event) => editTodo({...editedTodo, title: event.target.value})}
          fullWidth
        />
        <TextField
          label="Markdown based description"
          style={{marginTop: '6%'}}
          multiline
          rows={10}
          variant="outlined"
          value = {editedTodo ? editedTodo.description : ''}
          onChange = {(event) => editTodo({...editedTodo, description: event.target.value})}
          fullWidth

        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ToDoModal;
