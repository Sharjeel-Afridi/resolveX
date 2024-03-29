/* eslint-disable react/prop-types */
import useSearch from "../utils/useSearch";
import { useEffect, useState } from "react";
import Footer from "./Footer";


const Results = ({api, input}) => {

    const [selectedFilter, setSelectedFilter] = useState('All');
    const unsortedResults = useSearch(api,input);

    const results = unsortedResults.sort((a,b)=> a.item.Title.localeCompare(b.item.Title));
    
    useEffect(()=>{
        document.getElementById('new-div').scrollIntoView({behavior:'smooth'});
    }, []);
    
   
    // filled with dummy to make its size != 0
    let newResults = ["dummy"]; 
    if(selectedFilter != "All"){
        newResults = results.filter(element => element.item.year === selectedFilter);
    }
   
    //checks if there are results to show
    const showTotal = results.length !== 0;

    //checks whether filtered array is empty or there are no results
    const noResults = newResults.length === 0 || !showTotal;

    function handleNotesClick(link){
        window.open(link,'_blank');
    }
    

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        
    };

    //use filtered array if filter is selected
    const resultType = selectedFilter != "All" ? newResults : results; 
    
    return (
        <div className="new-div-container">
            {showTotal && (
                <div className="total-div">
                    <span className="total-results">Total Results: {selectedFilter != "All" ? newResults.length : results.length}</span> 
                    <div className="filter-dropdown">
                        <label>Year:</label>
                        <select value={selectedFilter} onChange={(e) => handleFilterChange(e.target.value)}>
                            <option value="All">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>)
            }
            
            <div className="new-div" id="new-div">
                {noResults ? (
                    showTotal && <h1 className="no-results">No Results Found</h1>
                    ) : (
                        resultType.map((element) => (
                            <div key={element.item.id} className="notes-div" onClick={() => handleNotesClick(element.item.notes)} >
                                <span className="title">{element.item.Title}</span>
                                <span className="year">Year: {element.item.year}</span>
                            </div>
                        ))
                    )
                }
            </div>
            <Footer />
           
        </div>
    );
};

export default Results;