'use client'
import { createSlice } from "@reduxjs/toolkit"



const  initialState={
    
        accountData:[]
}
export const accountManageSlice=createSlice({
    name:"accountManage",
   initialState,
   reducers:{
    addUser:(state,action)=>{
        state.accountData.push(action.payload)
    }
   }
});
export const {addUser}= accountManageSlice.actions;
export default accountManageSlice.reducer;