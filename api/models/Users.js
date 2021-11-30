/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName : 'users',
  primaryKey: 'id',
  fetchRecordsOnCreate: true,
  fetchRecordsOnUpdate: true,
  fetchRecordsOnDelete: true,
  attributes: {

    id:{
      type:'number',
      unique:true,
      autoIncrement:true
    },
    username:{
      type:'string',
      unique:true,
      required:true,
    },
    password:{
      type:'string',
      required:true
    },
    role:{
      type:"string",
    }
  },

  findRole: async function(input) {
    console.log("@model Users @method findrole :: input ", input);
     return await Users.findOne({username:input.username,password:input.password})
  },
  add: async function(input) {
    console.log("@model Users @method add :: input ", input);
    return await Users.create(input)
  },
  getAllUser: async function(){
    console.log("@model Users @method getAllUser :: input ");
    return await Users.find();
  },
  getProfile: async function(input,key) {
    console.log("@model Users @method getOne :: input ", input.params);
    if(key.username == input.params.username || key.role == 'admin')
    {
      return await Users.findOne(input);
    }
    else{
      return {message:"Access Denied"};
    }
     
  },
  edit: async function(input,key) {
    console.log("@model Users @method edit :: input ",input.params);
    if(key.username == input.params.username)
    {
      if(input.body.role)
      {
        return {message:"You are not authorized to change your role"}
      }
      return await Users.update(input.params)
      .set({username : input.body.username,password : input.body.password});
      
    }
    else if(key.role == 'admin')
    {
      return await Users.update(input.params).set(input.body);
    }
    else{
      return {message:"Access Denied"}
    }
     
  },
  delete: async function(input){
    console.log("@model Users @method delete :: input ", input);
    return await Users.destroy(input.id);
  }

};

