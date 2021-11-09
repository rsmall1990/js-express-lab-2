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
const eightBallResponseArray = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

// establish connection to data


// mount middleware

// mount routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/greeting", (req, res) => {
    res.send("Hello stranger");
});

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name;
    res.send(`What\'s up ${name}?`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total;
    const tipPercentage = req.params.tipPercentage;

    res.send(`Your tip should be $${total*(tipPercentage/100)}, or ${tipPercentage}% of ${total}`);
});

// gen random number, round, assign to random var, retrieve index position of random from eightBallResponseArray
app.get("/magic/:question", (req, res) => {
    const question = req.params.question;
    let random = Math.floor(Math.random() * eightBallResponseArray.length);
    
    res.send(`You asked "${question}?", and the Magic 8 Ball responded: ${eightBallResponseArray[random]}`);
});

// tell app to listen
app.listen(port, () => {
    console.log(`Express is listening on port: ${port}`);
});