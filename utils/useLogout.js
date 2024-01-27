import pb from "../lib/pocketbase";
import { useState } from "react";

export default function useLogout(){ 
    const [login, setLogin] = useState(true);
    function logout(){
        pb.authStore.clear();
        setLogin(false);
   }

   return logout;
}