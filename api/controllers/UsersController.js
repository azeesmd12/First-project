/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    loginVerify : async function (req,res) {
        console.log("@controller UserController @method loginverify req.body",req.body); 
        try {
            let token = await UsersService.loginVerify(req.body);
            res.send(token);
        } catch (err) {
            res.badRequest("there is no user in redords");
            
        } 
    },
    createUser : async (req,res)=>{
        console.log("@controller UsersController @createUser", req.body);
        try {
                let newUser = await UsersService.createUser(req.body);
                res.json(newUser);
        } catch (err) {
            console.log("@controller UsersController @createUser Error", err);
            res.badRequest(err);
        }    
    },

    viewAllUser : async (req,res)=>{
        console.log("@controller UsersController @viewAllUser");
        try {
            let allUser = await UsersService.viewAllUser();
            return res.json(allUser);
        } catch (err) {
            console.log("@controller UsersController @viewAllUser Error", err);
            res.badRequest(err);
        }
    },

    viewProfile : async (req,res)=>{
        console.log("@controller UsersController @viewOneUser",req.params);
        try {
            let user = await UsersService.viewProfile(req);
            return res.json(user);
        } catch (err) {
            console.log("@controller UsersController @viewOneUser Error", err);
            return res.badRequest(err);
        }
    },

    updateUser : async (req,res)=>{
        console.log("@controller UsersController @updateUser",req.params);
            try {
               let updatedUser = await UsersService.updateUser(req);
               res.json(updatedUser);
            } catch (err) {
                console.log("@controller UsersController @updateUser Error", err);
                return res.badRequest(err);
            }
        },
     
    deleteUser : async (req,res)=>{
        try {
            console.log("@controller UsersController @deleteUser",req.params);
            let deletedUser = await UsersService.deleteUser(req.params).fetch();
            res.json(deletedUser);
        } catch (err) {
            console.log("@controller UsersController @deleteUser Error", err);
            return res.badRequest(err);
        }
    },    

};

