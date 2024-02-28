import pb from "../lib/pocketbase";
import "../src/dashboard.css";
import { Link } from "react-router-dom";
import useLogout from "../utils/useLogout";
import { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import Sun from "../sun.png";
import Moon from "../moon.png";
import useVerified from "../utils/useVerified";
import DarkModeContext from "../utils/DarkModeContext";

const Dashboard = () => {
    const logout = useLogout();
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { loggedinUser, setLoggedinUser } = useContext(UserContext);

    useEffect(() =>{
        document.body.className = isDarkMode ? 'dark-mode' : '';
    },[isDarkMode]);

    useEffect(()=>{
        setLoggedinUser(pb.authStore.model.username);
    },[])
    return(
        <div>
            <nav>
                <Link to="/" className={`route-btn ${isDarkMode ? 'dark-mode' : ''}`}>resolveX</Link>
                <div className="nav-right">
                    <button className="toggle-btn" id="toggle-btn" onClick={toggleDarkMode}><img src={isDarkMode ? Sun : Moon}/> </button>
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