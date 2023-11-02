
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//create action
export const accountDetails = createAsyncThunk(
  "accountDetails",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `/api/transaction/${data}`      
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

//update action
export const accHistory = createAsyncThunk(
  "accHistory",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    const response = await fetch(
      `/api/transaction/${data}/history`,     
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


export const historyDataSlice = createSlice({
  name: "historyData",
  initialState: {
    accdetailsData: [],
    loading: false,
    error: null,
    history: [],
  },

  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },

  extraReducers: {
    [accountDetails.pending]: (state) => {
      state.loading = true;
    },
    [accountDetails.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loading = false;

      state.accdetailsData=JSON.parse(action.payload);
    },
    [accountDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [accHistory.pending]: (state) => {
      state.loading = true;
    },
    [accHistory.fulfilled]: (state, action) => {
     
      state.loading = false;
      state.history = JSON.parse(action.payload);

  
    },                    
    [accHistory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
})

  
// });

export default historyDataSlice.reducer;

export const { searchUser } = historyDataSlice.actions;