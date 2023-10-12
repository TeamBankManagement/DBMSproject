'use client'
import { configureStore } from "@reduxjs/toolkit"

import userSlice  from "./feature/user/userSlice"
import accountDetailsSlice from "./feature/Account/accountDetailsSlice"


export const store = configureStore({
    reducer:{
        
       userData:userSlice, 
       accountData:accountDetailsSlice,
        
    //add more reducer        
    }
 })
 export default store;


