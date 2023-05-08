import { useState, setUsers } from "react";

const ListRender = () => {
    const [list] = useState(["Nikolas", "Juan", "Pedro", "Rafael"]);

    const [users, setUsers] = useState([
      { id: 1, name: "Matheus", age: 31 },
      { id: 2, name: "João", age: 28 },
      { id: 3, name: "Pedro", age: 44 },
    ]);

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);

      setUsers((prevUsers) => {

        return prevUsers.filter((user) => randomNumber !== user.id)

      })
    };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete a random user</button>
    </div>
  )
}

export default ListRender