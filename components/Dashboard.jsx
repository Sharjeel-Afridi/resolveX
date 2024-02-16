import pb from "../lib/pocketbase";
import "../src/dashboard.css";
import { Link } from "react-router-dom";
import useLogout from "../utils/useLogout";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Dashboard = () => {
    const logout = useLogout();
    // const userName = pb.authStore.model.username;
    const { loggedinUser } = useContext(UserContext);
    return(
        <div>
            <nav>
                <h3>resolveX</h3>
                <h3 className="username">{loggedinUser}</h3>
            </nav>
            <div className="main-dashboard">
                <div className="dashboard-content">

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