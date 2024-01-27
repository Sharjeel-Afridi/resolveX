/* eslint-disable no-unused-vars */
import pb from "../lib/pocketbase";


export default function useCreateUser(){
    async function  createUser(email,password,passwordConfirm){
        try{
            const data = {
                "username": "",
                "email": `${email}`,
                "emailVisibility": true,
                "password": `${password}`,
                "passwordConfirm": `${passwordConfirm}`,
                "name": ""
            }
            const record = await pb.collection('users').create(data);
        }catch(error){
            console.log(error);
        }
    }
    return createUser;
} 

