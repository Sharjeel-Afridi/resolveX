import { useEffect, useState } from "react";

const useFetch = () => {
    
    const [apiResponse, setApiResponse] = useState(null);
    useEffect(()=> {
        async function apifetch(){
            const apiURL =  'https://sharjeel-afridi.github.io/resolvexApi/api.json';
            try{
                setApiResponse(await fetch(apiURL).then((resp)=>{return resp.json()}).then(data => {return data}));
                
                
            }catch{
                console.log("catch")
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