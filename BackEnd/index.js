
const express = require('express');

const mongoose = require('mongoose');

const userRoute = require('./Routes/userRoute');

// const todosRoute = require("./Routes/todosRoutes");

const cors = require('cors');

// const Auth = require('./MiddleWares/Auth');

const app = express();

require('dotenv').config();

app.use(cors());

app.use(express.json());

app.use('/user', userRoute )

// app.use('/todos', todosRoute )

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)

        console.log('connected...');
    } catch (error) {
        console.log(error);
    }
}

app.listen(process.env.PORT,()=>{
    connect();
    console.log(`listening to port 7000...`);
})