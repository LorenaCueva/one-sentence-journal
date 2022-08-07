function Entry({entry}){
    return (
        <div>
            <h3>{entry.text}</h3>
            <h5>{entry.date}</h5>
        </div>
    );

}

export default Entry;