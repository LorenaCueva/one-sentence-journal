import {useState} from 'react';

function Search({onSearch}){

    function handleSearch(e){
        onSearch(e.target.value);
    }

    return(
        <div className="row">
        <div className='col s6 offset-s3'>
            <form onSubmit={(e)=> e.preventDefault()}>
                <label>Search content: </label>
                <input type="text" onChange={handleSearch}></input> 
            </form>
        </div>
        </div>
    );
}

export default Search;