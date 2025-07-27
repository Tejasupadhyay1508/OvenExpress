const express = require('express');
const bodyParser = require('body-parser');

const ServerConfig = require('./config/ServerConfig');
const connectDB = require('./config/dbconfig');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.listen(ServerConfig.PORT, async ()=>{
    await connectDB();
    console.log(`Server is running on port ${ServerConfig.PORT}.....!!`);
  
});
