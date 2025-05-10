import React from "react";
import Card from "../Card/Card";

const users = [
  {
    id: 1,
    name: "Camilo Miranda",
    email: "cmiranda@unicartagena.edu.co",
    phone: "3332221110",
  },
  {
    id: 2,
    name: "Andrés Mancilla",
    email: "amancilla@unicartagena.edu.co",
    phone: "3334445566",
  },
];

function Cards() {
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
