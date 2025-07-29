const express = require('express');
// const bodyParser = require('body-parser');

const ServerConfig = require('./config/ServerConfig');
const connectDB = require('./config/dbconfig');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRouter');
// const User = require('./schema/userSchema'); // Import the User model


const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies

app.use('/user',userRouter); // Register the user router
app.use('/cart', cartRouter); 

app.post('/ping',(req,res)=>{
    console.log(req.body);
    return res.json({message:"pong"});
})

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

//localhost:5500/user/create-post
//localhost:5500/cart/123456 -GET