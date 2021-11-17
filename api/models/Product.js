/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName :'product_tb',
  primarykey:'id',
  fetchRecordsOnCreate: true,
  fetchRecordsOnUpdate: true,
  fetchRecordsOnDelete: true,

  attributes: {
    
    id:{
      type :'number',
      unique:true,
      autoIncrement:true
    },
    product_name:{
      type:'string',
      required:true
    },
    quantity:{
      type: 'number',
      required:true
    }
  },

  add: async function(input) {
    console.log("@Model Product @method add :: input",input);
   // let data = {product_name : input.product_name, quantity:input.quantity};
    return await Product.create(input)
  },
  getAll: async function(){
    console.log("@model product @method getAll :: input");
    return await Product.find();
  },
  getOne: async function(input) {
    console.log("@model product @method getOne :: input",input);
    return await Product.findOne(input);
    
  },
  edit: async function(input) {
    console.log("@model product @method edit :: input",input.params);
    return await Product.update(input.params).set(input.body);
    
  },
  delete: async function(input){
    console.log("@model Product @method delete :: input",input);
    return await Product.destroy(input);
  }

};

