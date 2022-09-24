import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'

function NewEntry({user, onNewEntry}){

    const today = new Date();

    const [newEntryData, setNewEntryData] = useState({text:"", date: today, userId: ""});
    const navigate = useNavigate();

    useEffect(()=> {
        if(!user) {
            navigate ('/login')
        }
    }, [])


    function handleSubmit(e){
        e.preventDefault();
        if(newEntryData.text == ""){
            window.alert("Your entry can't be empty");
        }
        else{
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
    }

    function handleFormChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setNewEntryData({...newEntryData, [name]:value, userId: user.user.id})
    }

    if (user){
        return (
                <div className="row">
                    <div className="col s6 offset-s3">
                        <div className="card grey lighten-4">
                            <div className="card-content">
                                <span className="card-title">-Today, {today.toDateString()}-</span>
                                <form onSubmit={handleSubmit}>
                                    <textarea id ="text" className="materialize-textarea" name="text" value={newEntryData.text} onChange={handleFormChange} placeholder="What marked my day?"/>
                                    <button className="waves-effect waves-light btn red lighten-2" 
                                        onClick={(e)=>{
                                            e.preventDefault();
                                            navigate('/entries')}
                                            }>Cancel</button>
                                    <button className="waves-effect waves-light btn red lighten-2" type='submit'>Done</button>
    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default NewEntry;