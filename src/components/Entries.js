import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Entry from './Entry';
import Search from './Search';

function Entries({logged, entries}){

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(()=> {
        if(!logged) navigate ('/login')
    }, [])

    function handleClick(){
        navigate ('/newEntry')
    }

    function handleSearch(searchWord){
        setSearch(searchWord);
    }

    if(logged){

        const today = new Date().toDateString();
        let todayEntry = entries.filter(entry => entry.date === today);

        let startEntry = [...entries].filter(e => e.date[0] === "=");

        // console.log(entry.date.toLowerCase().indexOf(search.toLowerCase()))

        const entriesToRender = entries.filter(entry => entry.text.toLowerCase().includes(search.toLowerCase()) ||
                                                        entry.date.toLowerCase().indexOf(search.toLowerCase()))
                                        .sort((a,b) => b.date.slice(8,10) - a.date.slice(8,10))
                                        .map(entry => entry.date[0] === "=" ? null : <Entry key={entry.id} entry={entry}/>)

        if(startEntry.length > 0 && search === "") entriesToRender.push(<Entry key={startEntry[0].id} entry={startEntry[0]}></Entry>);
        
        return(
            <div>
                {<h1>{logged.user.name}'s Journey</h1>}
                {<Search onSearch={handleSearch}></Search>}
                {todayEntry.length > 0 ? <></> : <button onClick={handleClick}>Add</button>}
                {entriesToRender}
            </div>
        );
    }
}
    

export default Entries;