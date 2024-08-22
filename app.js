require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 1000;
const app = express();

const registerUser = require('./routes/route');
const loginUser = require('./routes/route');

app.get('/', async(req, res)=>{
    res.status(200).json("Server is running you can proceed");
})
app.post('/register', registerUser);
app.get('/login',loginUser);


const start = async() =>{
   try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () =>{
        console.log(`port is connected on http://localhost:${PORT}`);
    })
   } catch (error) {
    console.log(error);
   }
}
start();