import { useState, useEffect } from "react";

const SearchBar = (distanceFromBottom, classname, placeholder) => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [isSticky, setSticky] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleInput = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleClick();
        }
        };
        const handleClick = () => {
            setShowResults(true);
        };
    
    useEffect(() => {
        const handleScroll = () => {
        const offset = window.scrollY;

        setSticky(offset > distanceFromBottom);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return {
    SearchBarComponent: (
        <div className={`input-div ${classname} ${isSticky ? 'sticky' : ''}`}>
        <div className="form__group field">
            <input
            type="input"
            onChange={handleInput}
            onKeyDown={handleKeyPress}
            className={`form__field ${isDarkMode ? 'dark-mode' : ''}`}
            id="input-el"
            placeholder="Search notes here"
            required=""
            />
            <label htmlFor="input-el" className="form__label">
            {placeholder}
            </label>
        </div>
        <button onClick={handleClick} className={isDarkMode ? 'dark-mode' : ''}>
            <span>SUBMIT</span>
        </button>
        </div>
    ),
    searchTerm,
    showResults,
    isDarkMode,
    setIsDarkMode,
    }
};

export default SearchBar;
