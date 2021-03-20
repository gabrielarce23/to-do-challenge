import create from "zustand";

/* const initialState = [
  {
    id: 1,
    title: "New todo",
    completed: false,
    description:
    `A paragraph with *emphasis* and **strong importance**.
 
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
 
* Lists
* todo
* done

`,
  },
]; */


let initialTodos = JSON.parse(window.localStorage.getItem('todos'))

if(!initialTodos) {
  initialTodos = [
    {
      id: 1,
      title: "New todo",
      completed: false,
      description:
      `A paragraph with *emphasis* and **strong importance**.
   
  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
   
  * Lists
  * todo
  * done
  
  `,
    },
    {
      id: 2,
      title: "Simple todo...",
      completed: false,
      description: '',
    },
    {
      id: 3,
      title: "Other todo",
      completed: false,
      description:
      `
Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this  `,
    },

  ]
}

const useStore = create((set) => ({
  todos: initialTodos,
  editedTodo: null,
  addTodo: (todo) =>
    set((state) => {
      const updatedTodos = [...state.todos, { ...todo, id: state.todos.length + 1 }];
      window.localStorage.setItem('todos',JSON.stringify(updatedTodos))
      return {
        todos: updatedTodos,
      };
    }),
  editTodo: (todo) => {
    set({editedTodo: todo})
  },
 
  putTodo: (changedTodo) => {

    set(state => {


      const index = changedTodo.id - 1;
      const updatedTodos = [...state.todos];
      const todo = {
        ...changedTodo
      };
      updatedTodos[index] = todo;
      window.localStorage.setItem('todos',JSON.stringify(updatedTodos))
      return { todos: updatedTodos, editedTodo: null };
    })
  },
  completeTodo: (id) =>
    set((state) => {
      const index = id - 1;
      const updatedTodos = [...state.todos];
      const todo = {
        ...state.todos[index],
        completed: !state.todos[index].completed,
      };

      updatedTodos[index] = todo;
      window.localStorage.setItem('todos',JSON.stringify(updatedTodos))
      return { todos: updatedTodos };
    }),
}));

export default useStore;
