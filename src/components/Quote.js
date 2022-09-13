import {useEffect, useState} from 'react';

function Quote(){

    const [quote, setQuote] = useState(null);

    function getQuote(){
        fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
        .then(r => r.json())
        .then(quote => setQuote(quote))
        .catch(error => console.log(error));
    }

    useEffect(() => getQuote(),[])

    if(quote)
        return(
            <div>
                <h1>Quote</h1>
                <p>{quote.quote}</p>
                <sub>-{quote.person}</sub>
                <p><button onClick={getQuote}>I need more motivation</button></p>
            </div>
        );
    
    return(
        <div>
            <h1>Quote</h1>
            <h2>Thinking...</h2>
        </div>
    );
}

export default Quote;