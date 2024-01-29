import { useEffect, useContext} from "react";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import Results from "./Results";
import Moon from "../moon.png";
import Sun from "../sun.png";
import "../src/styles.css";
import SearchBar from "./SearchBar";
import DarkModeContext from "../utils/DarkModeContext";



const Main = () => {
    const {SearchBarComponent, searchTerm,showResults} = SearchBar(432.2, "", "Search for notes here");
    const apiURL =  'https://sharjeel-afridi.github.io/resolvexApi/api.json';
    const apiResponse = useFetch(apiURL);
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    
    // function toggleClick(){
    //     setIsDarkMode(!isDarkMode);
    // }

    useEffect(() =>{
        document.body.className = isDarkMode ? 'dark-mode' : '';
    },[isDarkMode]);

    return (
        <div className="container">
            <button className="toggle-btn" id="toggle-btn" onClick={toggleDarkMode}><img src={isDarkMode ? Sun : Moon}/> </button>        
            <Link to="/pyqs" className={`route-btn ${isDarkMode ? 'dark-mode' : ''}`}>PYQ</Link>
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