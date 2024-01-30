import "../src/dashboard.css";
import { Link } from "react-router-dom";
import useLogout from "../utils/useLogout";

const Dashboard = ({ user }) => {

    const logout = useLogout();

    return(
        <div>
            <nav>
                <h3>resolveX</h3>
                <h3 className="username">{user}</h3>
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