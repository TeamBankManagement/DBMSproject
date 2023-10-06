'use client'
import { configureStore } from "@reduxjs/toolkit"
import accountManageSlice from "./feature/newaccount-manage/accountManageSlice"

 export const store = configureStore({
    reducer:{
        accountManage:accountManageSlice,
    //add reducer        
    }
 })