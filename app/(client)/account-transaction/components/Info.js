import Account from "./account"
import History from "./history"
function Info(){
    return(
        <div class="flex flex-col sm:flex-row">
            <Account></Account>
            <History></History>
        </div>
    )
}

export default Info;