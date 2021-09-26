
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//app middleware
app.use(express.json());
app.use(cors());

//import routes
const toDoRoutes = require('./routes/todo.route');
//route middleware
app.use(toDoRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://root:root@cluster0.bykjh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
    .then(() => {
        console.log("DB connected")
    })
    .catch((error) => console.log("DB connection error ", error))

app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT} !!!`);
});
