// require our dependencies
require("dotenv").config();
const express = require("express");
// initialize app
const app = express();

// config application settings

// handle data

// mount middleware

// configure port
const port = process.env.PORT;

// route
app.get("/", (req, res) => {
    res.send(`  <h1> 99 Bottles of beer on the wall... </h1>
                <h3> 99 bottles of beer</h3>
                <a href="/98">take one down, pass it around</a>`);
});

// Bottle Index
app.get("/:number_of_bottles", (req, res) => {
    let bottles = req.params.number_of_bottles;
    if(bottles >= 1){
        res.send(`  <h1>${bottles} bottles of beer on the wall...</h1>
                    <h3>${bottles} bottles of beer</h3>
                    <a href="/${bottles - 1}">take one down, pass it around</a>`);
    } else {
        res.send(`  <h1> 0 bottles of beer on the wall...</h1>
                    <h3>Uh oh...</h3>
                    <a href="/">Start Over?</a>`);
    }
});

// tell app to listen
app.listen(port, () => console.log("Express is listening on port ", port));