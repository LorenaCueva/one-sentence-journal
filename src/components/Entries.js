import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Entry from './Entry';
import Search from './Search';
import { setActiveLink } from './NavBar';

function Entries({user, entries, onEditEntry}){

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        if(!user) {
            navigate ('/login')
        }
        else setNavbar();
    }, [])

    function setNavbar(){
        setActiveLink("logout", false);
        setActiveLink("home", false);
        setActiveLink("motivation", false);
        setActiveLink("entries", true)
    }
    
    function handleClick(){
        navigate ('/newEntry');
    }

    function handleSearch(searchWord){
        setSearch(searchWord);
    }

    if(user){


        const readEntries = entries.map(entry => {entry.date = new Date(entry.date)
                                                return entry});


        const entriesToRender = readEntries.filter(entry => entry.text.toLowerCase().includes(search.toLowerCase()))
                                        .sort((a,b) => b.date - a.date)
                                        .map(entry => <Entry key={entry.id} entry={entry} onEditEntry={onEditEntry} user={user}/>)

        

        const today = new Date().toDateString();
        
        const todayEntry = readEntries.map(entry => entry.date.toDateString())
                                      .filter(entry => entry === today);
        

        return(
            <div>
                <h1>{user.user.name}'s Journey</h1>
                <Search onSearch={handleSearch}></Search>
                <div className='divider'></div>
                <div className='section'>
                    {todayEntry.length > 0 ? <></> : <button className="waves-effect waves-light btn red lighten-2" onClick={handleClick}><i className="material-icons">add</i>  Add Today's Entry</button>}
                </div>
                {entriesToRender}
            </div>
        );
    }
}
    

export default Entries;