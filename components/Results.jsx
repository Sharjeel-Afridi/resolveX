/* eslint-disable react/prop-types */
import Fuse from "fuse.js";
import { useEffect } from "react";


const Results = ({api, input}) => {


    useEffect(()=>{
        document.getElementById('new-div').scrollIntoView({behavior:'smooth'});
    },[])


    console.log("results 1");
    const fuseOptions = {
        keys: ['Subjects'],
        threshold: 0.5,
    };
    const fuse = new Fuse([], fuseOptions);
    fuse.setCollection(api.items);

    const results = fuse.search(input);
    let showTotal= false;
    if(results.length != 0){
        showTotal = true;
    }

    function handleNotesClick(link){
        window.open(link,'_blank');
    }


    return (
        <div className="new-div-container">
            {showTotal && <div className="total-div">
                <span className="total-results">Total Results: {results.length}</span> 
            </div>}
            
            <div className="new-div" id="new-div">
                {results.map((element, index) => (
                    <div key={index} className="notes-div" onClick={() => handleNotesClick(element.item.notes)} >
                    <span className="title">{element.item.Title}</span>
                    <span className="year">Year: {element.item.year}</span>
                    </div>
                ))}
            </div>
            
           
        </div>
    );
};

export default Results;