import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle',
        error: null
    },
    reducers: {
        usersLoaded: (state, action) => {
            return {
                ...state,
                users: action.payload
            };
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = state.users.concat(action.payload)
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }
});

export const {usersLoaded} = usersSlice.actions;
export default usersSlice.reducer;

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('/api/users');
    return response.json();
  })

