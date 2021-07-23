const express = require("express");
const app = express();
const PORT = 3001;
const dotenv = require("dotenv");
const mongoose = require("mongoose");


const number = require("./routes/numbers");

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(
    console.log("Connection Successful...")
).catch(err=>
    console.log("Connection failed...")
);

app.use("/api", number);

app.listen(PORT, ()=>{
    console.log("Backend is running...")
})