// import express from "express";
// import Todos from "./database";
// import { Todos } from "./database";

const express = require('express');
const cors = require('cors');
const Todos = require("./database");
const TodoController = require("./controller/TodoController");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Database Init
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const todoController = new TodoController();

app.get('/todo/:id', todoController.getById);
app.post('/todo', todoController.createTodo);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
