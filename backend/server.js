const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const userRoute = require('./routes/user');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB()

const app = express();


app.use(express.json());


app.use("/api/users", userRoute);




app.listen(port, () => console.log(`Server started on port ${port}`))


