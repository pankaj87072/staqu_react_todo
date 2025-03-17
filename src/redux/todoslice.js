import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('https://dummyjson.com/todos?limit=5');
    const data = await response.json();
    return data.todos;
  });
  export const addTodo = createAsyncThunk('todos/addTodo', async (todoText) => {
    const response = await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo: todoText, completed: false, userId: 1 }),
    });
    const data = await response.json();
    return data; // Return new task added from API
  });
  export const removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
    await fetch(`https://dummyjson.com/todos/${id}`);
    return id; 
  });

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
  },
  // reducers: {
    // addTodo: (state, action) => {
    //   state.list.push({ id: Date.now(), todo: action.payload});
    // },
    // removeTodo: (state, action) => {
    //   state.list = state.list.filter(todo => todo.id !== action.payload);
    // },
    // toggleTodo: (state, action) => {
    //   const todo = state.list.find(todo => todo.id === action.payload);
    //   if (todo) {
    //     todo.completed = !todo.completed;
    //   }
    // },
  // }
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.list = state.list.filter(todo => todo.id !== action.payload);
      });
  },
});
export const {  toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
