const mongoose = require('mongoose');
const userModel = require("./user");

mongoose.connect(
    'mongodb://localhost:27017/users',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
).catch(error => console.log(error));

async function getTasks(name){
    let result;
    if (name === undefined){
        result = await userModel.find();
    }  
    return result;  
}

exports.getTasks = getTasks;