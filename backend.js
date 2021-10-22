const express = require('express');
const app = express();
const port = 5000;

const tasks = {
    task_list :
    [
       {
          id : 'xyz789',
          note : 'do homework',
          month_due: '10',
          day_due: '30'
       }
    ]
 }

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});