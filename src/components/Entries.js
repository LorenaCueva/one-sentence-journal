import {useEffect, useState} from 'react';
import Entry from './Entry';

function Entries({user}){

    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/entries?username=${user}`)
        .then(r => r.json())
        .then(entries => setEntries(entries))
      },[])

      let entriesToRender = entries.map(entry => <Entry key={entry.id} entry={entry}/>)

    // const date = new Date();

    // useEffect(()=>bla,[]);

    // function bla(){
    //     fetch("http://localhost:4000/entries",{
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //     autor: user,
    //     text: "Woof",
    //     date: date 
    //     })
    //     })
    //     .then(r => r.json())
    //     .then(post => console.log(post))
    //     .catch(error => console.log(error))
    // }

    return(
        <div>
            <h1>{user}'s Journey</h1>
            {entriesToRender}
            {/* <button onClick={bla}>Click</button> */}
        </div>
    );
}

export default Entries;