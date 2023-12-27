import React, {useState, useEffect} from 'react';

function Timer() {

    const [count, setCount] = useState(0);
    useEffect(() => {

        document.title = `${count}`;
    })
    
    return (
        <div>

            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>onClick</button>

        </div>
    )
    
}

export default Timer;
