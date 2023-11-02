'use client'
import { configureStore } from "@reduxjs/toolkit"

import userSlice  from "./feature/user/userSlice"
import accountDetailsSlice from "./feature/Account/accountDetailsSlice"
import  historyDataSlice  from "./feature/transaction/tranSlice"


export const store = configureStore({
    reducer:{        
       userData:userSlice, 
       accountData:accountDetailsSlice,
       historyData:historyDataSlice,
        
    //add more reducer        
    }
 })
 export default store;


