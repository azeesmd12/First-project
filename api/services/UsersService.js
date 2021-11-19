
const jwt = require('jsonwebtoken');

module.exports = {

    loginVerify: async function(input) {
        console.log("@Services UsersServices @method loginverify :: input",input);
        let user = await Users.findRole(input);
        if(user){
            let token = jwt.sign(
                {username:user.username,role:user.role},
                'This is your secret key',
                {expiresIn : '1h'});
            return token ;
        }
        else{
            return {message :"Invalid User"};
        }
    },

    createUser : async function(input){
        console.log("@Service UsersService @method createUser :: input",input);
        return await Users.add(input);
    },

    viewAllUser: async function(){
        console.log("@Service UsersService @method viewAllUser");
        return await Users.getAllUser();
    },
    viewProfile: async function(input) {
        console.log("@Service UsersService @method viewOneUser :: input",input.params);
        let finalToken = input.headers.authorization.split(' ')[1];
        let key = jwt.decode(finalToken);
        let finalKey = {username:[key.username],role:[key.role]};
        return await Users.getProfile(input,finalKey);
    },
    updateUser: async function(input) {
        console.log("@Service UsersService @method updateUser :: input",input.params);
        let finalToken = input.headers.authorization.split(' ')[1];
        let key = jwt.decode(finalToken);
        let finalKey = {username:[key.username],role:[key.role]};
        return await Users.edit(input,finalKey);
    },
    deleteUser: async function(input) {
        console.log("@Seriveces UsersService @method deleteUser :: input",input);
        return await Users.delete(input);  
    }
}