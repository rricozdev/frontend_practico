const getUser = async () => {
// lógica
    try {
        const user = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await user.json();

        if(data.length === undefined){
            console.log("404 | Petición no válida")
        } else {
            console.log(data)
        }
        
    } catch (error) {
        console.error("error: ", error)
    }
};

getUser();

