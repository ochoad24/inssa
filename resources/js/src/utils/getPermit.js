export const getPermit={
    showItem:(namePermit)=>{
        // IF UNDEFINED PERMITS RETURN FALSE FOREVER
        if (typeof localStorage.getItem("permitKey") === "undefined") {
            return false;
        }else{
            let permits = JSON.parse(localStorage.getItem("permitKey"));
            let getPermit=permits.find(x => x.name === namePermit && x.status === 1);
            if (typeof getPermit === "undefined") {
                return false;
            }else{
                return true;
            }
        }
    }
}