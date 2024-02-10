import { useEffect, useState } from "react";

const useFetch = () => {
    const apiURL =  'https://sharjeel-afridi.github.io/resolvexApi/api.json';
    const pyqapiURL =  'https://notes-search.pockethost.io/api/collections/pyqs/records?perPage=100';
    const [apiResponse, setApiResponse] = useState(null);
    const [pyqResponse, setPyqResponse] = useState(null);
    useEffect(()=> {
        async function apifetch(){
            
            try{
                setApiResponse(await fetch(apiURL).then((resp)=>{return resp.json()}).then(data => {return data}));
                pyqFetch();
                
            }catch{
                console.log("catch")
                console.log(apiURL)
                setTimeout(() => {
                    apifetch();
                }, 5000);
            }
            
        }
        async function pyqFetch(){
            try{
                setPyqResponse(await fetch(pyqapiURL).then((resp)=> {return resp.json()}).then(data => {return data}));
            }catch{
                setTimeout(() => {
                    pyqFetch();
                }, 5000);
            }
        }
        
        apifetch();
    }, []);
    return apiResponse, pyqResponse;    
            
};
export default useFetch;