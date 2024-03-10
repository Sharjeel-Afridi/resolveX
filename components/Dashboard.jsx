import pb from "../lib/pocketbase";
import "../src/dashboard.css";
import { Link } from "react-router-dom";
import useLogout from "../utils/useLogout";
import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import Sun from "../sun.png";
import Moon from "../moon.png";
import RemoveBookmark from "../src/assets/remove-bookmark.png";
import RemoveBookmarkDark from "../src/assets/remove-bookmark-dark.png";
import DarkModeContext from "../utils/DarkModeContext";

const Dashboard = () => {
    const logout = useLogout();
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { loggedinUser, setLoggedinUser } = useContext(UserContext);
    const [records, setRecords] = useState([]);

    const getResults = async () => {
        setRecords(await pb.collection('bookmarks').getFullList({
            sort: '-created',
            user: pb.authStore.model.id
        }));
        console.log(records)
    }

    const removeBookmark = async (event, id) => {
        event.stopPropagation();
        await pb.collection('bookmarks').delete(id);
    }

    useEffect(() =>{
        document.body.className = isDarkMode ? 'dark-mode' : '';
    },[isDarkMode]);

    useEffect(()=>{
        setLoggedinUser(pb.authStore.model.username);
        getResults()
    },[records])


    function handleNotesClick(link){
        window.open(link,'_blank');
    }
    

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
                <div className="dashboard-content new-div">
                    {records == [] ? 
                        records.map((element) => (
                        <div key={element.id} className="notes-div" onClick={() => handleNotesClick(element.notes)} >
                            <span className="title">{element.title}</span>
                            <div className="bottom-notes">
                                <span className="year">
                                    Year: {element.year}
                                </span>
                                <img 
                                    src={isDarkMode ? {RemoveBookmark} : {RemoveBookmarkDark}}
                                    onClick={(event) => removeBookmark(event, element.id)}
                                />
                            </div>
                        </div>))
                        : (<h1>No Bookmarks Found</h1>)
                    }
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