const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,"First name is required"],
        minlength:[5,"first name must be at least 5 characters long"],
        lowercase: true,
        trim: true,//if the user give extra spaces then it will remove the spaces
        maxlength: [20,"first name must be at most 20 characters long"],
    },
     laastName: {
        type: String,
        required: [true,"First name is required"],
        minlength:[5,"first name must be at least 5 characters long"],
        lowercase: true,
        trim: true,//if the user give extra spaces then it will remove the spaces
        maxlength: [20,"first name must be at most 20 characters long"],
    },

    mobileNumber:{
        type: String,
        trim: true,
        unique: [true,"Mobile number must be unique"],
        maxlength: [10,"Mobile number must be at most 10 characters long"],
        required: [true,"Mobile number is required"],
    },

    email:{
        type: String,
        required: [true,"Email is required"],
        unique: [true,"Email must be unique"],
        lowercase: true,
        trim: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    }, password:{
        type: String,
        required: [true,"Password is required"],
        minlength: [8,"Password must be at least 8 characters long"],
        maxlength: [20,"Password must be at most 20 characters long"],
    }
    
});

const User = mongoose.model('User', userSchema);//collection
module.exports = User;