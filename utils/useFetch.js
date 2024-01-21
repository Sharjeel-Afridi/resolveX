import { useEffect, useState } from "react";

const useFetch = (apiURL) => {
    
    const [apiResponse, setApiResponse] = useState(null);
    useEffect(()=> {
        async function apifetch(){
            
            try{
                setApiResponse(await fetch(apiURL).then((resp)=>{return resp.json()}).then(data => {return data}));
                
                
            }catch{
                console.log("catch")
                console.log(apiURL)
                setTimeout(() => {
                    apifetch();
                }, 5000);
            }
            
        }
        
        apifetch();
    }, []);
    return apiResponse;    
            
};
export default useFetch;