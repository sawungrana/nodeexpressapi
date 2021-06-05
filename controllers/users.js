import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const createUser = (req, res) => {
    //jupuk POST user
    const user = req.body;
    //ngepush POST neng array nganggo userId gawean anyar
    users.push({ ...user, id: uuidv4()});
    //ngekei info neng wong sing ngePOST
    res.send(`User with the name ${user.firstname} added to database`);
}

export const getUser = (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from database`)
}

export const patchUser = (req, res) => {
    const {id} = req.params;
    const {firstname, lastname, age, weight} = req.body;

    const user = users.find((user) => user.id == id);

    if(firstname) user.firstname = firstname;

    if(lastname) user.lastname = lastname;
    
    if(age) user.age = age;

    if(weight) user.weight = weight;

    res.send(`User ${firstname} with id ${id} has been updated`);

}