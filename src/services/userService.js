class UserService{
    constructor(_userRepository){
        this.userRepository = _userRepository;
    }


    async registerUser(userDetails){
        //it will create a brand new user in the db

        //1: we need to check if the user with this email already exists or not
        const user = await this.userRepository.findUser({
            email: userDetails.email,
            mobileNumber: userDetails.mobileNumber
        });
        if(user){
            //we found the user
            
            throw {reason: 'User already exists', statusCode: 400};
        }

        //2: if not exists, then create a new user
        const newUser = await this.userRepository.createUser({
            email:userDetails.email,
            password:userDetails.password,
            firstName:userDetails.firstName,
            lastName:userDetails.lastName,
            mobileNumber:userDetails.mobileNumber
        });
        if(!newUser){
            throw{reason: 'User creation failed', statusCode: 500};
        }

        //3. if exists, then throw an error
        return newUser;

        //4: return the user details of created user
    }

}
module.exports = UserService;