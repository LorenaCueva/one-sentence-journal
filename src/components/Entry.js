import {useState} from 'react';

function Entry({entry, onEditEntry, user}){

    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState(entry);


    function handleEdit(e){
        e.preventDefault();
        if(formData.text === ""){
            window.alert("Your entry can't be empty");
        }
        else{
            fetch(`http://localhost:3000/600/entries/${formData.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.accessToken}`
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(obj => {setEdit(false); onEditEntry(obj)})
        }
    }

    function handleFormChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]:value})
    }

    const d = new Date(formData.date).toDateString();
    const today = new Date().toDateString();

    if(!edit){
        return (
            <div className="row">
            <div className="col s12">
              <div className="card grey lighten-4">
                <div className="card-content">
                  <span className="card-title">-{d === today ? "Today, " + d : d}-</span>
                  <h6>{formData.text}</h6>
                  <div>
                    <button className="waves-effect waves-light btn red lighten-2" onClick={() => setEdit(true)}><i className="material-icons left">create</i>Edit</button> 
                  </div>
                </div>
              </div>
            </div>
           </div>
        );
    }
    else{
        return(
            <div className="row">
            <div className="col s6 offset-s3">
              <div className="card grey lighten-4">
                <div className="card-content">
                  <span className="card-title">-{d === today ? "Today, " + d: d}-</span>
                  <form onSubmit={handleEdit}>
                        <label htmlFor="editText">Edit Entry</label>
                        <textarea id ="editText" className="materialize-textarea" name="text" value={formData.text} onChange={handleFormChange}/>
                        <button className="waves-effect waves-light btn red lighten-2" onClick={(e) =>{e.preventDefault(); setEdit(false)}}>Cancel</button> 
                        <button className="waves-effect waves-light btn red lighten-2" type="submit">Done</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }

}

export default Entry;