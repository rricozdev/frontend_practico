const users = [
  { id: 1, name: "Jhon Doe", email: "ejemplo@mail.com" },
  { id: 2, name: "Jhon Smith", email: "ejemplo_2@mail.com" },
];

// [{id:1, name:"Jhon Doe", email:"ejemplo@mail.com"}, b, c, d, e]
//         i
//         0                                           1  2  3  4

console.log(users[1]["id"]);
console.log(users.id);

// [{}]
// a(atomicidad)c()i(integridad)d
console.log(users[0]["name"]);

const propiedad = "name";
console.log(users[0][propiedad]);

console.log(Object.keys(users));
console.log(Object.values(users));



