import {useState} from 'react';

function Search({onSearch}){

    function handleSearch(e){
        // e.preventDefault();
        onSearch(e.target.value);
    }

    return(
        <div className="row">
        <div className='col s6 offset-s3'>
            <form onSubmit={(e)=> e.preventDefault()}>
                {/* <div className="input-field">
                        <input id="search" type="search" required onChange={handleSearch}/>
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                </div> */}
                <label>Search content: </label>
                <input type="text" onChange={handleSearch}></input> 
            </form>
        </div>
        </div>
    );
}

export default Search;