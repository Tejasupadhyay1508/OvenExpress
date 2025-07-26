const mongoose = require('mongoose');
const ServerConfig = require('./ServerConfig');

/** 
 * THE  BELOW function help as too connect mongodb server
 */
async function connectDB(){
    try{
        await mongoose.connect(ServerConfig.DB_URL);
        console.log('Connected to DB');

    }catch(error){
        console.log('Error connecting to DB');
        console.log(error);

    }

}
module.exports = connectDB;