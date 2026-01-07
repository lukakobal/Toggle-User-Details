import { useState } from "react";
import "./styles.css";

const users = [
  { id: 1, name: "Luka", age: 32 },
  { id: 2, name: "Ana", age: 28 },
  { id: 3, name: "Mark", age: 35 },
];

export default function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app">
      <button onClick={() => setShowUsers((prev) => !prev)}>
        {showUsers ? "Hide users" : "Show users"}
      </button>

      {showUsers && (
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => setSelectedUser(user)}>
              {" "}
              {user.name}
            </li>
          ))}
        </ul>
      )}

      {selectedUser ? (
        <div className="details">
          <h3>{selectedUser.name}</h3>
          <p>Age: {selectedUser.age}</p>
        </div>
      ) : (
        <p className="hint"> Select a user</p>
      )}
    </div>
  );
}
