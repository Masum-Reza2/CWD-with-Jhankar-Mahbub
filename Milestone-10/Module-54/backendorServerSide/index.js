const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; // to never face problem in production

// middleware
app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Masum Reza', email: 'masum@gmail.com' },
    { id: 2, name: 'Masum Reza', email: 'masum@gmail.com' },
    { id: 3, name: 'Masum Reza', email: 'masum@gmail.com' },
    { id: 4, name: 'Masum Reza', email: 'masum@gmail.com' },
    { id: 5, name: 'Masum Reza', email: 'masum@gmail.com' },
]


app.get('/', (req, res) => {
    res.send('user server side is running.')
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/user/:id', (req, res) => {
    const id = parseFloat(req.params.id);
    const user = users.find(user => user.id === id) || {};
    res.send(user);
})

app.post('/users', (req, res) => {
    console.log('post api hitting');
    const newUser = req.body;
    console.log(newUser)
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    //optional callback function
    console.log(`server is running at port ${port}`)
})