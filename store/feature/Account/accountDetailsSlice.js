
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//create action
export const createAccount = createAsyncThunk(
  "createAccount",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `/api/account/${data.userid}/${data.acctype}`,
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
      console.log(result);
      return result;
      
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

//read action
export const showAccount = createAsyncThunk(
  "showAccount",
  async (args, { rejectWithValue }) => {

    const response = await fetch(
      `/api/account/${args.userid}/${args.type}`
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
export const showAllAccount = createAsyncThunk(
  "showAllAccount",
  async (args, { rejectWithValue }) => {
    
    const response = await fetch(
      "/api/account"
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
export const deleteAccount = createAsyncThunk(
  "deleteAccount",
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
export const finalupdataAccount = createAsyncThunk(
  "finalupdataAccount",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(
      `/api/account/${data.userid}/${data.acctype}`,
      {
        method: "PATCH",
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
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
//update action
export const updateAccount = createAsyncThunk(
  "updateAccount",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(
      `/api/account/${data.userid}/${data.accyype}`,
      {
        method: "PATCH",
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

export const accountDetailsSlice = createSlice({
  name: "accountData",
  initialState: {
    accData: [],
    loading: false,
    error: null,
    searchData: [],
    singleData:[],
  },

  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },

  extraReducers: {
    [createAccount.pending]: (state) => {
      state.loading = true;
    },
    [createAccount.fulfilled]: (state, action) => {
      console.log(state.accData);
      console.log(action.payload);
      state.loading = false;

      state.accData.push(action.payload.savedUser);
    },
    [createAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [showAccount.pending]: (state) => {
      state.loading = true;
    },
    [showAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleData = action.payload;
      
    },
    [showAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [showAllAccount.pending]: (state) => {
      state.loading = true;
    },
    [showAllAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.accData = JSON.parse(action.payload);
    },
    [showAllAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteAccount.pending]: (state) => {
      state.loading = true;
    },
    [deleteAccount.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.accData = state.accData.filter((ele) => ele.id !== id);
      }
    },
    [deleteAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [updateAccount.pending]: (state) => {
      state.loading = true;
    },
    [updateAccount.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload)
      const accountData = JSON.parse(action.payload);
  state.accData = state.accData.map((user) =>
    user._id === accountData._id ? accountData : user
  );
  console.log(state.accData);
  
    },                    
    [updateAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [finalupdataAccount.pending]: (state) => {
      state.loading = true;
    },
    [finalupdataAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleData = action.payload;
  
    },                    
    [finalupdataAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
})

  
// });

export default accountDetailsSlice.reducer;

export const { searchUser } = accountDetailsSlice.actions;