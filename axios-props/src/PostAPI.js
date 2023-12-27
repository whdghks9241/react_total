import React, {useState, useEffect} from "react";

import axios from "axios";

const PostExam = () => {

    const [data, setData]  = useState(null);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
                console.log('데이터가 존재하지 않습니다.', err);
            });
    }, [])

    return (
        <div>
            {data ? (
                <ul>
                    {data.map(item => (
                        <div key={item.id}>
                            <li>title : {item.title}</li>
                            <p>body : {item.body}</p>
                        </div>
                        
                    ))}
                </ul>

                ) : (<p>데이터가 존재하지 않습니다</p>)
            }
        </div>
    )
}

export default PostExam;