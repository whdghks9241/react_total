import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Users = () => {

    const [data, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.console.log('일치하는 데이터가 없습니다.', error);
        });
    }, []);
    return(
        <>
        {data ? (
            <ul>
                {data.map(user => (
                    <li key={user.id} >
                        <p>유저 이름 : {user.username}</p><br />
                        <p>유저 메일 : {user.email}</p><br />
                        {user.address && user.address.street}  
                        {user.address && user.address.suite}  
                        {user.address && user.address.city}  
                        {user.address && user.address.zipcode} <br />
                        {user.address.geo.lat}<br/>
                        {user.address.geo.lng}<br/>
                        {user.phone}<br />
                        {user.website}<br />
                        {user.company.name}<br />
                        {user.company.catchPhrase}<br />
                        {user.company.bs}<br />
                        <br />
                    </li>
                ))}
            </ul>
            ) : (
            <p>데이터가 없습니다.</p>)
        }
        </>
    )
}

export default Users;