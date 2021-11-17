/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName :'product_tb',
  primarykey:'id',

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
  }

};

