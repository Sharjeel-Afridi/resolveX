import pb from "../lib/pocketbase";
import { useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";

const useVerified = () => {

    const { loggedinUser } = useContext(UserContext);
    const [isVerified, setIsVerified] = useState(false);
    useEffect(() => {
        async function checkVerified() {
            const id = pb.authStore.model.id;

            const userdata = await pb.collection('users').getOne(id);
            setIsVerified(userdata.verified);
        }

        if (pb.authStore.isValid) checkVerified();
    }, [loggedinUser]);

    async function requestVerification() {
        const email = pb.authStore.model.email;
        const res = await pb.collection("users").requestVerification(email);
        if (res) alert("Verification mail sent.");


    }

    return { isVerified, requestVerification };
}

export default useVerified;