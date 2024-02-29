import React, { useState, useEffect } from 'react';

function External() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h1>Daftar Pengguna</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.username})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default External;