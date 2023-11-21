# CSC 436 Web Applications - Lab 5

## Overview:
The initial implementation of our react app used json-server to mock a REST API for simplicity. Now to make the app more scalable, flexible, and kind of production ready with a proper backend, we used Express.js with MongoDB replacing josn-server.



|               | Previous Setup | Current Setup |
|---------------|----------------|---------------|
| Backend       |json-server     | Node.js with Express.js |
| Database      | db.json file   | MongoDB Atlas |



## Key Changes

### 1. New Backend Setup
- Set up a Node.js server using Express.js
- Configured routes for handling API requests (/auth/register, /auth/login and /todo)

### 2. Integrating the Database
- Replaced the json-server database with MongoDB Atlas
- Utilized Mongoose for to define schemas (i.e. User, Todo), for data validation, and building queries

### 3. Changing the API Endpoints
- Redefined the API endpoints to work with the newly created Express.js routers
- Implemented the CRUD (Create, Read, Update, Delete) operations using Mongoose functions

### 4. User Authentication
- Added user authentication using JSON Web Tokens
- Passwords are securely hashed before being stored in MongoDB using bCrypt

### 5. React Frontend Integration
- Updated the API endpoints in the React frontend to match the new backend
- Handled asynchronous data fetching and state management based on the new backend structure