import pb from "../lib/pocketbase";
import "../src/dashboard.css";
import { Link } from "react-router-dom";
import useLogout from "../utils/useLogout";
import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import useVerified from "../utils/useVerified";

const Dashboard = () => {
    const logout = useLogout();
    const { isVerified, requestVerification } = useVerified();
    // const userName = pb.authStore.model.username;
    const { loggedinUser, setLoggedinUser } = useContext(UserContext);
    useEffect(()=>{
        setLoggedinUser(pb.authStore.model.username);
    },[])
    return(
        <div>
            <nav>
                <h3>resolveX</h3>
                <div className="nav-right ">
                    {!isVerified && (
                        <button onClick={requestVerification}>Verify</button>
                    )}
                    <h3 className="username">{loggedinUser}</h3>
                    
                </div>
            </nav>
            <div className="main-dashboard">
                <div className="dashboard-content">
                    <h1>Coming Soon!</h1>
                </div>
                <Link to="/" >
                    <button 
                        className="logout-btn"
                        onClick={() => logout()}
                    >
                        Log Out
                    </button>
                </Link>
            </div>
            
        </div>
    )
}

export default Dashboard;