import { useState , useEffect} from "react";
import Results from "./Results";
import Moon from "../moon.png";
import Sun from "../sun.png";
import "../src/styles.css";


const Main = () => {
    const [ searchTerm, setSearchTerm] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    function handleInput(e){
        setSearchTerm(e.target.value);
    }
    function handleClick(){
        setShowResults(true);
    }
    function toggleClick(){
        setIsDarkMode(!isDarkMode);
    }
    useEffect(() =>{
        document.body.className = isDarkMode ? 'dark-mode' : '';
    },[isDarkMode]);

    useEffect(()=> {
        async function apifetch(){
            const apiURL =  'https://sharjeel-afridi.github.io/resolvexApi/api.json';
            try{
                setApiResponse(await fetch(apiURL).then((resp)=>{return resp.json()}).then(data => {return data}));
            }catch{
                setTimeout(() => {
                    console.log("tryagain")
                    apifetch();
                }, 5000);
            }
            
        }
        apifetch();
    }, []);
    
    return (
        <div className="container">
            <button className="toggle-btn" id="toggle-btn" onClick={toggleClick}>{isDarkMode ? <img src= {Sun} alt="Light mode" /> : <img src= {Moon} alt="Dark mode" />}</button>        
            <div className="main">
                <div className="title">
                    <h1>resolveX</h1>
                </div>
                <div className="input-div">
                    <div className="form__group field">
                        <input  type="input" onChange={handleInput} value={searchTerm} className={`form__field ${isDarkMode ? 'dark-mode' : ''}`} id="input-el" placeholder="Search notes here" required="" />
                        <label htmlFor="input-el" className="form__label">Search for notes here</label>
                    </div>
                    <button id="submit" onClick={handleClick} className={isDarkMode ? 'dark-mode' : ''}><span>SUBMIT</span></button>
                </div>
            </div>
            {showResults && <Results api={apiResponse} input={searchTerm} />}
        </div>

    );
};

export default Main;