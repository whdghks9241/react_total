import React, {useEffect, useState} from "react";
import axios from "axios";

const Joke = () => {

    const [jokeContents, setJokeContents] = useState('');

    useEffect(() => {
        axios.get("https://v2.jokeapi.dev/joke/Any")
        .then(response => {
            setJokeContents(response.data.joke || `${jokeContents.data.setup}` `${jokeContents.data.delivery}`);
        })
        .catch(err => {
            console.log('not contents 404', err)
        })
    })

    return (
        <div >
            <div>
                {jokeContents && <p>{jokeContents.setup}</p>}
                {jokeContents && <p>{jokeContents.delivery}</p>}
            </div>
            

        </div>
    )

}

export default Joke;