const express = require('express')

const ServerConfig = require('./config/ServerConfig');

const app = express()



app.listen(ServerConfig.PORt, ()=>{
    console.log(`Server is running on port ${ServerConfig.PORT}`)
  
})