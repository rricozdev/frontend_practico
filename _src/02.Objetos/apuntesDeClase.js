// Crear una arrow function que reciba un array de empleados, cada empleado tiene un nombre, tenga un salario, la función debe retornar el nombre de los empleados cuyo salario sea mayor o superior a $3000 USD.

// const empleadosConBuenSalario = () => {
// };


const empleados = [{id:1,nombre:"Mario", salario:3200},{id:2,nombre:"Juan", salario:2900}, {id:3,nombre:"Pedro", salario:3500}, {id:4,nombre:"Salomón", salario:4000}];

const empleadosConBuenSalario = [];
console.log(empleados.length)

for(let i = 0; i < empleados.length; i++){
    if(empleados[i].salario > 3000) {
        empleadosConBuenSalario.push(empleados[i])
    }
};

console.log(empleadosConBuenSalario)

// La tarea es utilizar el método .filter();
//array con trabajadores de salario max 3000
empleadosBuenSalario = empleados.filter ( (empleado) => empleado.salario > 3000 )

console.log(empleadosBuenSalario);

// solo nombres 
empleadosBuenSalario = empleados
.filter(empleado => empleado.salario > 3000)
.map(empleado => empleado.nombre)

console.log(empleadosBuenSalario);
