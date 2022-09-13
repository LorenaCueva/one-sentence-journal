import {useState} from 'react';

function Search({onSearch}){

    function handleSearch(e){
        // e.preventDefault();
        onSearch(e.target.value);
    }

    return(
        <form onSubmit={(e)=> e.preventDefault()}>
            <label>Search content: </label>
            <input type="text" onChange={handleSearch}/>  
        </form>
    );
}

export default Search;