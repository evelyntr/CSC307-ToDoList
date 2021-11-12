const mongoose = require("mongoose");
const userModel = require("./user");
const dotenv = require("dotenv");
dotenv.config();

mongoose /* change later to include user name & password */
  .connect(
    "mongodb+srv://dylanc3:dbmongo307@cluster307.zvkgk.mongodb.net/ToDoList",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((error) => console.log(error));

async function getUsers(name) {
  /* improve later */
  let result;
  if (name === undefined) {
    result = await userModel.find();
  } else if (name) {
    result = await findUserByName(name);
  }
  return result;
}

async function findUserById(id) {
  try {
    return await userModel.findUserById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function addUser(user) {
  try {
    const userToAdd = new userModel(user);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function findUserByName(name) {
  return await userModel.find({ name: name });
}

exports.getUsers = getUsers;
exports.findUserById = findUserById;
exports.addUser = addUser;
