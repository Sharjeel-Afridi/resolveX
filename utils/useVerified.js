import pb from "../lib/pocketbase";
import { useState } from "react";

const useVerified = () => {

    
    const [isVerified, setIsVerified] = useState(false);

    async function checkVerified() {
        const id = pb.authStore.model.id;

        const userdata = await pb.collection('users').getOne(id);
        setIsVerified(userdata.verified);
    }

    
    

    async function requestVerification() {
        const email = pb.authStore.model.email;
        const res = await pb.collection("users").requestVerification(email);
        if (res) alert("Verification mail sent.");


    }

    return { isVerified, requestVerification, checkVerified };
}

export default useVerified;