const {model} = require("mongoose");
const UserService = require("../services/userService");
const userRepository = require("../repositories/userRepository");
async function createUser(req,res){

    console.log("Create user Controller called");
    console.log(req.body)
    //todo:register the user

    const userService = new UserService(new userRepository());
    try{
        const response = await userService.registerUser(req.body);
         return res.json({
         message :'successfully register the user',
         data:response,
         error:{}
        });

    }catch(error){
        return res.json({
            success:false,
            message: error.reason ,
            data:{},
            error:error
        })

    }
   

}
module.exports = {
    createUser
}