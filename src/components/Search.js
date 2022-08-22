import {useState} from 'react';

function Search({onSearch}){

    function handleSearch(e){
        // e.preventDefault();
        onSearch(e.target.value);
    }

    return(
        <form onSubmit={(e)=> e.preventDefault()}>
            <label>Search</label>
            <input type="text" onChange={handleSearch}/>  
            <p>(Search Month in 3 letter format)</p>
        </form>
    );
}

export default Search;