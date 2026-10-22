/*const express = require("express");
const mongooes =  require("mongoose");  
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require('dotenv').config();


const POST = process.env.PORT || 8070;
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongooes.connect(URL{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongooes.connection;
connection.once('open',()=>{
    console.log("MongoDB Connection Success!");
})

app.listen(POST,()=>{
    console.log(`Server is up and running on port number: ${POST}`);
});

*/




const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8070;
const URL = process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser.json());

if (!URL) {
    console.error("MongoDB URL is missing. Check your .env file.");
    process.exit(1);
}

mongoose.connect(URL)
    .then(() => {
        console.log("MongoDB Connection Success!");

        app.listen(PORT, () => {
            console.log(`Server is up and running on port number: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });



