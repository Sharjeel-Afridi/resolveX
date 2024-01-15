/* eslint-disable react/prop-types */
import useSearch from "../utils/useSearch";
import { useEffect, useState } from "react";


const Results = ({api, input}) => {

    const [selectedFilter, setSelectedFilter] = useState('All');

    useEffect(()=>{
        document.getElementById('new-div').scrollIntoView({behavior:'smooth'});
    },[])


    console.log("results 1");
   
    const results = useSearch(api,input);
    
    let newResults = [];
    
    
    if(selectedFilter != "All"){
        newResults = results.filter(element => element.item.year === selectedFilter);
    }
    let showTotal= false;
    if(results.length != 0){
        showTotal = true;
    }

    function handleNotesClick(link){
        window.open(link,'_blank');
    }
    

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        console.log(filter)
        
    };


    return (
        <div className="new-div-container">
            {showTotal && <div className="total-div">
                <span className="total-results">Total Results: {selectedFilter != "All" ? newResults.length : results.length}</span> 
                <div className="filter-dropdown">
                    <label>Year</label>
                    <select value={selectedFilter} onChange={(e) => handleFilterChange(e.target.value)}>
                        <option value="All">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>}
            
            <div className="new-div" id="new-div">
                {selectedFilter != "All" ? newResults.map((element) => (
                    <div key={element.item.id} className="notes-div" onClick={() => handleNotesClick(element.item.notes)} >
                    <span className="title">{element.item.Title}</span>
                    <span className="year">Year: {element.item.year}</span>
                    </div>
                )) : 
                results.map((element) => (
                    <div key={element.item.id} className="notes-div" onClick={() => handleNotesClick(element.item.notes)} >
                    <span className="title">{element.item.Title}</span>
                    <span className="year">Year: {element.item.year}</span>
                    </div>
                ))}
            </div>
            
           
        </div>
    );
};

export default Results;