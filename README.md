[![github workflow](https://github.com/evelyntr/CSC307-ToDoList/blob/master/.github/workflows/node.js.yml/badge.svg)](https://github.com/evelyntr/CSC307-ToDoList/blob/master/.github/workflows/node.js.yml)
# CSC307 - EASE : README

Intro to Software Engineering Group Project: To Do List Web Application

# Description

Our minimalistic, helpful application revolves around the concept of a basic To-Do List. With our clean, user-friendly layout, we allow users to enter our home page in order to begin. The function our list platform, Ease, offers so far is the ability to have multiple lists, while being able to open each one in a side panel. Tasks can then be added to, deleted from, or checked off within each list. We aimed to make list usage accessible to users in the simplest way possible, also allowing them to clear groups of tasks as well as remove entire lists to fit their liking.

# UI Prototype

https://www.figma.com/proto/Tr7I1qQoarBi5osA1itqxg/to-do-list?page-id=0%3A1&node-id=4%3A2&starting-point-node-id=4%3A2

Last Updated: October 28th, 2021

# Development Environment Setup

Style Checker: Prettier

Frontend:

**How to install:**

1. Clone master branch
2. Download Node.js **npm install**
3. Install react-router-dom **npm i react-router-dom**
4. Install React.js icons **npm install react-icons --save**
5. Install Font Awesome icons following instructions here _https://fontawesome.com/v6.0/docs/web/use-with/react/_
6. _NOTE: EASILY INSTALL ALL DEPENDENCIES WITH npm i_
7. Run with **npm start**

Backend:

**Dependencies:**

1. npm install express
2. npm install cors
3. npm install dotenv
4. npm install mongoose
5. npm install nodemon -> to run backend: npx nodemon backend.js

**How to install linter:**

1. install locally: npm install --save-dev --save-exact prettier
2. empty config file: echo {}> .prettierrc.json
3. create .prettierignore file
4. format all files: npx prettier --write . (can use check to check only already formatted files)

# Diagrams

Class Diagram:

<img width="333" alt="Screen Shot 2021-12-06 at 7 20 11 PM" src="https://user-images.githubusercontent.com/63328944/144960162-3f0dd84d-75a4-4bc4-a946-3e6a3c73cc9a.png">


Deployment/Component Diagram:

![component_deployment diagram (1)](https://user-images.githubusercontent.com/63328944/144959896-51e0230a-0403-4a9c-b6de-6ac50a2b612b.jpg)



# Code Coverage Report

Our testing covers the model component of the backend with full coverage for task schema.

<img width="618" alt="Screen Shot 2021-12-06 at 7 50 44 PM" src="https://user-images.githubusercontent.com/63328944/144963026-aa441fe2-9d99-4ce2-b3fb-4eacef9b709d.png">


# Extras

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
