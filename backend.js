const express = require('express');

const userServices = require('./models/user-services');

const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/list', async (req, res) => {
    const name = req.query['task'];
    try {
        const result = await userServices.getTasks(name);
        res.send({tasks_list: result});         
    } catch (error) {
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
});

const list = {
    tasks_list :
    [
        {
            name : 'laundry'
        }
    ]
}