const express = require('express');


const ServerConfig = require('./config/ServerConfig');
const connectDB = require('./config/dbconfig');

const app = express();




app.listen(ServerConfig.PORT, async ()=>{
    await connectDB();
    console.log(`Server is running on port ${ServerConfig.PORT}.....!!`);
  
});
