const express = require('express');
// const bodyParser = require('body-parser');

const ServerConfig = require('./config/ServerConfig');
const connectDB = require('./config/dbconfig');
// const User = require('./schema/userSchema'); // Import the User model


const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies

app.listen(ServerConfig.PORT, async ()=>{
    await connectDB();
    console.log(`Server is running on port ${ServerConfig.PORT}.....!!`);

    // const newUser = await User.create({
    //     email:'a@b.com',
    //     password:'12345678',
    //     firstName:'Tejas',
    //     lastName:'Upadhyay',
    //     mobileNumber:'1234567890',

    // });
    // console.log("created new user");
    // console.log(newUser);
  
});
