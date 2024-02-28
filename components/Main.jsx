import { useEffect, useContext} from "react";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import Results from "./Results";
import Moon from "../moon.png";
import Sun from "../sun.png";
import "../src/styles.css";
import SearchBar from "./SearchBar";
import DarkModeContext from "../utils/DarkModeContext";
import pb from "../lib/pocketbase";
import UserContext from "../utils/UserContext";



const Main = () => {
    const {SearchBarComponent, searchTerm,showResults} = SearchBar(432.2, "", "Search for notes here");
    const apiURL =  'https://sharjeel-afridi.github.io/resolvexApi/api.json';
    const apiResponse = useFetch(apiURL);
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { loggedinUser, setLoggedinUser } = useContext(UserContext);
    const isValid = pb.authStore.isValid ;

    useEffect(() =>{
        document.body.className = isDarkMode ? 'dark-mode' : '';
    },[isDarkMode]);

    useEffect(() => {
        if(isValid){
            setLoggedinUser(pb.authStore.model.username);
        }
    }, [])

    return (
        <div className="container">
            <div className="navbar">
                <Link to="/pyqs" className={`route-btn ${isDarkMode ? 'dark-mode' : ''}`}>PYQ</Link>
                <div className="right-nav">
                    {isValid ? (

                        <Link to={'/dashboard'} className={`user ${isDarkMode ? 'dark-mode' : ''}`}>{loggedinUser}</Link>
                    ): (
                        <Link 
                            to={"/login"}
                            className="login-link"
                        >
                            Login
                        </Link>
                        
                    )}
                    <button className="toggle-btn" id="toggle-btn" onClick={toggleDarkMode}><img src={isDarkMode ? Sun : Moon}/> </button>
                </div>
                        
            </div>
            
            <div className="main">
                <div className="title">
                    <h1>resolveX</h1>
                </div>
                
            </div>
            {SearchBarComponent}
            {showResults && <Results api={apiResponse} input={searchTerm} />}
        </div>

    );
};

export default Main;