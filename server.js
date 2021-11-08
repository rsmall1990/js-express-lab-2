// require dependencies
const express = require("express");
// initialize app
const app = express();
// config app settings

// set up port value and .env
require('dotenv').config();
const port = process.env.PORT; 

// Environment Variables
// 1) Environment Variables are used to store information about our environment
// 2) Examples of things we'll store in environment variables
//  - API key
//  - Connection string to our database server
//  - secret key...which are used for authentication


// configure data

// establish connection to data


// mount middleware

// mount routes
app.get("/", (req,res) => {
    res.send("Hello World")
});

app.get("/greeting", (req,res) => {
    res.send("Hello stranger");
});

app.get("/greeting/:name", (req,res) => {
    const name = req.params.name
    res.send(`What\'s up ${name}?`);
});

// tell app to listen
app.listen(port, () =>{
    console.log(`Express is listening on port: ${port}`);
});