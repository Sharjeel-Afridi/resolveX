import { useState , useEffect} from "react";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import Results from "./Results";
import Moon from "../moon.png";
import Sun from "../sun.png";
import "../src/styles.css";
import SearchBar from "./SearchBar";


const Main = () => {
    const {SearchBarComponent, searchTerm,showResults,isDarkMode,setIsDarkMode} = SearchBar(423.8, "");
    const apiURL =  'https://sharjeel-afridi.github.io/resolvexApi/api.json';
    const apiResponse = useFetch(apiURL);
    
    function toggleClick(){
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() =>{
        document.body.className = isDarkMode ? 'dark-mode' : '';
    },[isDarkMode]);

    return (
        <div className="container">
            <button className="toggle-btn" id="toggle-btn" onClick={toggleClick}><img src={isDarkMode ? Sun : Moon}/> </button>        
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