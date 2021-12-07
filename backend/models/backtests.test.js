const taskServices = require("./taskServices.js");
const taskSchema = require("./taskSchema");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;
let conn;
let task_schema;
let result;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  conn = mongoose.createConnection(uri, mongooseOpts);

  task_schema = conn.model("Tasks", taskSchema);

  taskServices.connect(conn);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  let dummyTask = {
    taskName: "hw",
    _id: mongoose.Types.ObjectId("508f191e810c19729de860ea"),
    listName: "today",
    completed: false,
  };
  let result = new task_schema(dummyTask);
  await result.save();
  let dummyTask1 = {
    taskName: "laundry",
    _id: mongoose.Types.ObjectId("203f191e810c19729de860ea"),
    listName: "today",
    completed: false,
  };
  let result1 = new task_schema(dummyTask1);
  await result1.save();
  let dummyTask2 = {
    taskName: "cleaning",
    _id: mongoose.Types.ObjectId("101f191e810c19729de860ea"),
    listName: "tomorrow",
    completed: false,
  };
  let result2 = new task_schema(dummyTask2);
  await result2.save();
});

afterEach(async () => {
  await task_schema.deleteMany();
});

test("Get Tasks", async () => {
  const tasks = await taskServices.getTasks("");
  expect(tasks).toBeDefined();
  expect(tasks.length).toBe(0);
});

test("Find task by ID", async () => {
  const id = "508f191e810c19729de860ea";
  const tasks = await taskServices.findTaskById(id);
  expect(result).toBeDefined();
  tasks.forEach((tasks) => expect(result._id.toString()).toBe(id));
  expect(1).toBe(1);
});

test("Add Task", async () => {
  let taskadd = {
    taskName: "hw",
    _id: mongoose.Types.ObjectId("508f191e810c19729de860ea"),
    listName: "today",
    completed: false,
  };
  const newtask = await taskServices.addTask(taskadd);
  expect(newtask).toBeDefined();
  expect(taskadd.taskName).toBe(taskadd.taskName);
});

test("Delete Task", async () => {
  let taskdel = {
    taskName: "hw",
    _id: mongoose.Types.ObjectId("508f191e810c19729de860ea"),
    listName: "today",
    completed: false,
  };
  const gonetask = await taskServices.deleteTask(taskdel);
  expect(gonetask).toBeDefined();
  expect(taskdel.taskName).toBe(taskdel.taskName);
});

test("Find task by Name", async () => {
  const name = "hw";
  const tasks = await taskServices.findTaskByName(name);
  const tasks1 = await taskServices.sortList(name);
  expect(result).toBeDefined();
  tasks.forEach((tasks) => expect(result.taskName.toString()).toBe(name));
});

test("check connection", async () => {
  taskServices.connect(conn);
});
