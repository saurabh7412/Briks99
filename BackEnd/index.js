
const express = require('express');

const mongoose = require('mongoose');

const userRoute = require('./Routes/userRoute');

const postRoute = require("./Routes/postRoute");

const adminRoute = require('./Routes/adminRoute');

const cors = require('cors');
const TimeLogger = require('./Middleware/TimeLogger');

// const Auth = require('./MiddleWares/Auth');

const app = express();

require('dotenv').config();

app.use(cors());

app.use(express.json());

app.use(TimeLogger);


app.get('/',(req,res)=>{
    try {
        res.send('Welcome to Homepage !')
    } catch (error) {
        res.status(400).send(error)
    }

})

app.use('/user', userRoute )

app.use('/posts', postRoute )

app.use('/admin',adminRoute);


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
    console.log(`listening to port...`);
})