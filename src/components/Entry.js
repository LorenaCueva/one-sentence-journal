import {useState} from 'react';

function Entry({entry}){

    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState(entry);


    function handleEdit(e){

        e.preventDefault();
        fetch(`http://localhost:3000/entries/${formData.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(obj => {setEdit(false)})
    }

    function handleFormChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]:value})
    }


    if(!edit){
        return (
            <div>
                <h5>{formData.date}</h5>
                <h3>{formData.text}</h3>
                <button onClick={() => setEdit(true)}>Edit</button>
                {/* <button onClick={handleDeleteEntry}>Delete</button> */}
            </div>
        );
    }
    else{
        return(
          <form onSubmit={handleEdit}>
          <label>{formData.date}</label>
          <textarea name="text" value={formData.text} onChange={handleFormChange}/>
          <input type="submit" value="Done"/>
          </form>
        )
    }

}

export default Entry;