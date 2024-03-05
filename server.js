const express = require('express');
const errorHandler = require("./middleware/errorHandler")
const connectDb = require('./config/dbConnection')
const dotenv = require('dotenv').config();

//MONOGO CONNECT
connectDb();

const app =express();
const port = process.env.PORT || 5000;

//MIDDLEWARE
app.use(express.json())


//MAIN APP USE
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });