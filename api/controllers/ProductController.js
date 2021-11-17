/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    createProduct : async (req,res)=>{
        try {
            let data = {product_name:req.body.product_name,quantity:req.body.quantity};
            let newProduct = await Product.create(data).fetch();
            res.json(newProduct);
        } catch (error) {
            res.status(500).send(error)
        }    
    },

    viewAllProduct : async (req,res)=>{
        try {
            let allproduct = await Product.find();
            res.json(allproduct);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    viewSingleProduct : async (req,res)=>{
        try {
            let product = await Product.findOne({id:req.params.id});
            res.json(product);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    updateProduct : async (req,res)=>{
        try {
           let updatedProduct = await Product.update({id:req.params.id})
           .set({
               product_name :req.body.product_name,
               quantity : req.body.quantity
           }).fetch();
            res.json(updatedProduct);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    deleteProduct : async (req,res)=>{
        try {
            let deletedProduct = await Product.destroy({id:req.params.id}).fetch();
            res.json(deletedProduct);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    
    

};

