# CSC307-ToDoList
Intro to Software Engineering Group Project

Style Checker: Prettier

**Dependencies:**

1. npm install express
2. npm install cors
3. npm install dotenv
4. npm install mongoose
5. npm install nodemon -> to run backend: npx nodemon backend.js

**How to install:**

1. install locally: npm install --save-dev --save-exact prettier
2. empty config file: echo {}> .prettierrc.json
3. create .prettierignore file
4. format all files: npx prettier --write . (can use check to check only already formatted files)

**To Access Mongo Cloud Database:**

1. Download mongosh https://www.mongodb.com/try/download/shell?jmp=docs
2. Enter in command line: mongosh "mongodb+srv://cluster307.zvkgk.mongodb.net/myFirstDatabase" --username dylanc3
3. Make sure to replace "myFirstDatabase" with name of database
