
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      "/api/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read action
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://641dd63d945125fff3d75742.mockapi.io/crud"
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//read all action
export const showAllUser = createAsyncThunk(
  "showAllUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "/api/users"
    );

    try {
      const result = await response.json();
      
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    console.log(id);
    const response = await fetch(
      `/api/users/${id._id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(
      `/api/users/${data._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "userData",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(createUser.pending, (state, action) => {
  //       state.loading = true;
  //     })
  //     .addCase(createUser.fulfilled, (state, action) => {
  //       console.log(state.users);
  //       console.log(action.payload);
  //       state.loading = false;        
  //       state.users.push(action.payload);
  //     })
  //     .addCase(createUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload.message;
  //     })
  //     .addCase(showUser.pending, (state,action) => {
  //       state.loading = true;
  //     })
  //     .addCase(showUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.users = action.payload;
  //     })
  //     .addCase(showUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     })
  //     .addCase(showAllUser.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(showAllUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.users = JSON.parse(action.payload);
  //     })
  //     .addCase(showAllUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     })
  
  //     .addCase(deleteUser.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(deleteUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       const { id } = action.payload;
  //       if (id) {
  //         state.users = state.users.filter((ele) => ele.id !== id);
  //       }
  //     })
  //     .addCase(deleteUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     })
  
  //     .addCase(updateUser.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(updateUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       console.log(action.payload)
  //       const userData = JSON.parse(action.payload);
  //   state.users = state.users.map((user) =>
  //     user._id === userData._id ? userData : user
  //   );
  //   console.log(state.users);
    
  //     })                    
  //     .addCase(updateUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload.message;
  //     })
  //     .addCase("updateUserLocally", (state, action) => {
  //       const updatedUser = action.payload;
  //       state.users = state.users.map((user) =>
  //         user._id === updatedUser._id ? updatedUser : user
  //       );
  //     })
  //     .addCase("rollbackUserUpdate", (state, action) => {
  //       const originalUser = action.payload;
  //       state.users = state.users.map((user) =>
  //         user._id === originalUser._id ? originalUser : user
  //       );
  //     });
  // }
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      console.log(state.users);
      console.log(action.payload);
      state.loading = false;

      state.users.push(action.payload.savedUser);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [showAllUser.pending]: (state) => {
      state.loading = true;
    },
    [showAllUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = JSON.parse(action.payload);
    },
    [showAllUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((ele) => ele.id !== id);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload)
      const userData = JSON.parse(action.payload);
  state.users = state.users.map((user) =>
    user._id === userData._id ? userData : user
  );
  console.log(state.users);
  
    },                    
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
})

  
// });

export default userSlice.reducer;

export const { searchUser } = userSlice.actions;