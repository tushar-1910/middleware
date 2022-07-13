const express = require('express');
const handler = require('./books');
// console.log(handler)
const app = express();

app.use(express.json());

app.get("/books", handler.allBooks, handler.getbooks);

app.get("/book/:name", handler.book);

app.listen(4000);
