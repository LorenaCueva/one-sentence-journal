import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Entry from './Entry';
import Search from './Search';

function Entries({user, entries, onEditEntry}){

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(()=> {
        if(!user) navigate ('/login')
    }, [])

    function handleClick(){
        navigate ('/newEntry')
    }

    function handleSearch(searchWord){
        setSearch(searchWord);
    }

    if(user){

        const today = new Date().toDateString();
        const readEntries = entries.map(entry => {entry.date = new Date(entry.date)
                                                return entry});

        let todayEntry = readEntries.map(entry => entry.date.toDateString())
                                    .filter(entry => entry === today)

        console.log(todayEntry)

        const entriesToRender = readEntries.filter(entry => entry.text.toLowerCase().includes(search.toLowerCase()))
                                        .sort((a,b) => b.date - a.date)
                                        .map(entry => <Entry key={entry.id} entry={entry} onEditEntry={onEditEntry}/>)
        
        return(
            <div>
                {<h1>{user.user.name}'s Journey</h1>}
                {<Search onSearch={handleSearch}></Search>}
                {todayEntry.length > 0 ? <></> : <button onClick={handleClick}>Add Today's Entry</button>}
                {entriesToRender}
            </div>
        );
    }
}
    

export default Entries;