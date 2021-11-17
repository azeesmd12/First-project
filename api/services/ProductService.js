const Product = require("../models/Product");



module.exports = {

   createProduct : async function(input){
       console.log("@Service ProductService @method createProduct :: input",input);
       return await Product.add(input);
   },
   viewAllProduct: async function(){
       console.log("@Service ProductService @method viewAllProduct");
       return await Product.getAll();
   },
   viewSingleProduct: async function(input) {
       console.log("@Service ProductService @method viewSingleProduct :: input",input);
       return await Product.getOne(input);
   },
   updateProduct: async function(input) {
       console.log("@Service ProductService @method updateProduct :: input",input.params);
       return await Product.edit(input);
   },
   deleteProduct: async function(input) {
       console.log("@Seriveces product @method deleteProduct :: input",input);
       return await Product.delete(input);  
   }


}