'use client'
import Transactions from "./transactions";
import { accHistory } from "@/store/feature/transaction/tranSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
function History(){
    const {data:session ,status} = useSession();
    const dispatch=useDispatch();
    // const history = useSelector((state)=>state.historyData.history);
    const {history} = useSelector((state)=> state.historyData);
    useEffect(() => { 
        
        console.log(session?.user.accounts[0].accountNumber);
                       dispatch(accHistory(session?.user.accounts[0].accountNumber));
      }, [status=='authenticated']);
    //   const data1 = JSON.parse(history);
    // const data = JSON.parse(history);
console.log(history);
if(status=='loading'){
    return <p>loading</p>

}

    return(
        <div className="h-[60vh] overflow-y-scroll  overflow-x-hidden w-full sm:w-[48vw] mx-auto">
            {
                history.map((data)=>{
                    return <Transactions key={data._id} {...data}/> 
                })
            } 
        </div>
    )
}
export default History;