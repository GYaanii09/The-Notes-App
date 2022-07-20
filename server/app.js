const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("My api");
})

app.listen(3001, ()=>{
    console.log("started at the port 3001");
})

app.post("/login", ()=>{
    console.log("Api login page");
})
app.post("/register", (req, res)=>{
    console.log(res.body);
})

mongoose.connect('mongodb://localhost:27017/notes', {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("DB connected");
})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = new mongoose.model("user", userSchema);

