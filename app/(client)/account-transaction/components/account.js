"use client"
import Transactions from "./transactions";
import { accHistory, accountDetails } from "@/store/feature/transaction/tranSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Loading from "@/app/components/Loading";
function Account(){
    const {data:session ,status} = useSession();
    const dispatch=useDispatch();
    // const history = useSelector((state)=>state.historyData.history);
    const {accdetailsData} = useSelector((state)=> state.historyData);
    
  if(status=='authenticated'){
    dispatch(accountDetails(session?.user.accounts[0].accountNumber));
  }
if(status=='loading'){
    return <Loading/>

}
    return(
        <div class="relative flex w-full max-w-[50rem] flex-row rounded-xl bg-clip-border pl-10">
            <div class="hidden sm:block relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border text-gray-700">
              <img
                src="/Images/bank.jpg" alt="image"
                class="h-full w-full object-cover"/>
            </div>
            
            <div class="p-6 ">
                <div class="flex-col text-2xl font-semibold p-2">
                    <div className="text-black"> Acc Balance : </div>
                    <div className="text-5xl text-black "> {accdetailsData.balance}</div>
                </div>
                <div className="text-xl text-black p-2">
                    <div className="flex py-2 text-black text-2xl font-semibold">Acc No :</div>
                    <div className="pb-4 text-black font-medium">{accdetailsData.account_number}</div>
                </div>
                <div className="text-xl text-black p-2">
                    <div className="flex text-black py-2 text-2xl font-semibold">IFSC Code :</div>
                    <div className="pb-4 text-black font-medium">{accdetailsData.ifsc}</div>
                </div>
                {/* <div className="p-2">
                    <div className="text-2xl text-black font-medium pb-2">Account Holder Name :</div>
                    <div className="font-semibold text-black text-xl">Jaydev Kundu</div>
                </div> */}
            </div>
        </div>
    )
}
export default Account;