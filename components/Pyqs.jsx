import { useEffect,useState } from "react";
import '../src/styles.css';
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Moon from "../moon.png";
import Sun from "../sun.png";
import useFetch from "../utils/useFetch";

const Pyqs = () => {
    const apiURL =  'https://notes-search.pockethost.io/api/collections/pyqs/records?perPage=100';
    const apiResponse = useFetch(apiURL);
    const {SearchBarComponent, searchTerm,showResults,isDarkMode,setIsDarkMode} = SearchBar(0, "pyqinput-div");

    useEffect(() =>{
        document.body.className = isDarkMode ? 'dark-mode' : '';
    },[isDarkMode]);

    function handleClick(url){
        window.open(url)
    }
    function toggleClick(){
        setIsDarkMode(!isDarkMode);
    }
   
    console.log(apiResponse)
    const renderSection = (title, branch, semester) => (
        <div className="pyqs-container">
           {title !== "" && <h1>{title}</h1>}
            <h3>{`Semester ${semester}`}</h3>
            <div className="pyqs-div">
                {apiResponse != null && apiResponse.items
                    .filter((element) => element.Branch === branch && element.semester === semester)
                    .map((element) => (
                        <div key={element.id} className="pyqs" onClick={() => {handleClick(element.link)}}>
                            <span className="pyq-year">{element.year}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
    
    if(apiResponse === null){
        return (
            <>
            <div className="loading-div">
                <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            </>
        )
    }

    return (
        <>
            {SearchBarComponent}
            <button className="toggle-btn" id="toggle-btn" onClick={toggleClick}><img src={isDarkMode ? Sun : Moon}/> </button>
            <Link to="/" className={`route-btn ${isDarkMode ? 'dark-mode' : ''}`}>NOTES</Link>
            <div className="section-pyqs">
                {renderSection("First Year B.Tech & B.Arch", "1 year", "1")}
                {renderSection("", "1 year", "2")}
                {renderSection("B.Tech Computer Science", "B.Tech CS", "3")}
                {renderSection("B.Tech Artificial Intelligence", "B.Tech AI", "3")}
                {renderSection("B.Tech Electrical", "B.Tech Electrical", "3")}
                {renderSection("B.Tech Electronics", "B.Tech Electronics", "3")}
                {renderSection("B.Arch", "B.Arch", "3")}
            </div>
        </>
    );
    
};

export default Pyqs;