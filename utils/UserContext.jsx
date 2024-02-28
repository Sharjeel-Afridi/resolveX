import { createContext, useState, useEffect } from 'react';
import pb from '../lib/pocketbase';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedinUser, setLoggedinUser] = useState('');

  useEffect (() => {
    if(loggedinUser !== ''){
    // const updateLoggedinUser = () => {
    setLoggedinUser(pb.authStore.model.username);
    // }
    }
    
  },[])

  return (
    <UserContext.Provider value={{ loggedinUser, setLoggedinUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
