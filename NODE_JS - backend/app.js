const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const dotenv = require('dotenv');

/*
app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/employees', (req, res) => {
    res.send('Employees');
})
*/


const connectDB = require('./config/db');

//load config
dotenv.config({ path: './config/config.env' });
connectDB();

//routes
app.use('/', require('./routes/index'));



app.listen(3000);
