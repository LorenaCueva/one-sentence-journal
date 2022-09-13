import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'

function NewEntry({user, onNewEntry}){

    const today = new Date();

    const [newEntryData, setNewEntryData] = useState({text:"", date: today, userId:""});
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user) navigate ('/login')
    },[])


    function handleSubmit(e){
        e.preventDefault();
        // console.log(newEntryData);
        fetch(`http://localhost:3000/600/entries`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${user.accessToken}`
            },
            body: JSON.stringify(newEntryData)
        })
        .then(r => r.json())
        .then(obj => {
            onNewEntry(obj);
            navigate('/entries')})
        
    }

    function handleFormChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setNewEntryData({...newEntryData, [name]:value, userId: user.user.id})
    }


    return (
        <div>
          <h1>{today.toDateString()}</h1>
          <form onSubmit={handleSubmit}>
          {/* <label>{today}</label> */}
          <textarea name="text" value={newEntryData.text} onChange={handleFormChange}/>
          <button type="submit">Done</button>
          </form>
        </div>
    );
}

export default NewEntry;