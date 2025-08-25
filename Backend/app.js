const dotenv = require('dotenv')
dotenv.config();
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express();
const cors = require('cors')
const connectToDb = require('./db/db')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

const userRoutes = require('./routes/userRoutes')


connectToDb();

app.get('/' , (req , res) =>{
    res.send('hi there')
});

app.use('/users', userRoutes);



module.exports = app;