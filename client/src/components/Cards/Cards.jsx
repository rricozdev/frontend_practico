import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

// const users = [
//   {
//     id: 1,
//     name: "Camilo Miranda",
//     email: "cmiranda@unicartagena.edu.co",
//     phone: "3332221110",
//   },
//   {
//     id: 2,
//     name: "Andrés Mancilla",
//     email: "amancilla@unicartagena.edu.co",
//     phone: "3334445566",
//   },
// ];

// const users = async () => {
//   const response = await fetch("http://localhost:3001/api/users");
//   const users = await response.json();
//   return users;
// }




function Cards() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error al traer usuarios: ", error);
      }
    }
    fetchUsers();
  },[]);
  
  return (
    <div >
      {users.map((user) => (
        <Card
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </div>
  );
}

export default Cards;
