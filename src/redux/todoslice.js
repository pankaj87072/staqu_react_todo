import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('https://dummyjson.com/todos');
    const data = await response.json();
    return data.todos;
  });

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: Date.now(), todo: action.payload});
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    // toggleTodo: (state, action) => {
    //   const todo = state.list.find(todo => todo.id === action.payload);
    //   if (todo) {
    //     todo.completed = !todo.completed;
    //   }
    // },
  }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
