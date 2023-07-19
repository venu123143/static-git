const express  = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

// config and db connection
require('dotenv').config();
require('./database/db')

// cors and json
const options={
    origin: ['http://localhost:3000'],
    credentials: true,
    withCredentials:true,
    optionSuccessStatus: 200,
}
app.use(cors(options))
app.use(express.json());

// controllers
app.use(require('./controller/UserRouter'))

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`);
})
