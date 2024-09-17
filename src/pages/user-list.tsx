import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface IUser {
    id : number
    name : string
    surname : string
    age : number
    salary : number
}


export const UserList = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('http://localhost:3014/users')
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }, []);
    
      const handleDelete = (id: number) => {
        fetch(`http://localhost:3014/users/${id}`, {
          method: 'DELETE',
        }).then(() => setUsers(users.filter((user) => user.id !== id)));
      };

    return <div>
        <h3>UserList</h3>
        <ul>
            {
                users.map(user => (
                    <li key={user.id}>
                        {user.name} {user.surname} - {user.age} years, {user.salary} AMD
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                        <Link to={`/user/${user.id}`}>Edit</Link>
                    </li>
                ))
            }
        </ul>
    </div>
}