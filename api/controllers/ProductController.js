/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const ProductService = require("../services/ProductService");



module.exports = {
  
    createProduct : async (req,res)=>{
        console.log("@controller ProductController @createProduct", req.body);
        try {
                let newProduct = await ProductService.createProduct(req.body);
                res.json(newProduct);
        } catch (err) {
            console.log("@controller ProductController @createProduct Error", err);
            res.badRequest(err);
        }    
    },

     viewAllProduct : async (req,res)=>{
        console.log("@controller ProductController @viewAllProduct");
        try {
            let allproduct = await ProductService.viewAllProduct();
            return res.json(allproduct);
        } catch (err) {
            console.log("@controller ProductController @viewAllProduct Error", err);
            res.badRequest(err);
        }
    },

  viewSingleProduct : async (req,res)=>{
        console.log("@controller ProductController @viewSingleProduct",req.params);
        try {
            let product = await ProductService.viewSingleProduct(req.params);
            return res.json(product);
        } catch (err) {
            console.log("@controller ProductController @viewSingleProduct Error", err);
            return res.badRequest(err);
        }
    },

   updateProduct : async (req,res)=>{
    console.log("@controller ProductController @updateProduct",req.params);
        try {
           let updatedProduct = await ProductService.updateProduct(req);
           res.json(updatedProduct);
        } catch (err) {
            console.log("@controller ProductController @updateProduct Error", err);
            return res.badRequest(err);
        }
    },

    deleteProduct : async (req,res)=>{
        try {
            console.log("@controller ProductController @deleteProduct",req.params);
            let deletedProduct = await ProductService.deleteProduct(req.params);
            res.json(deletedProduct);
        } catch (err) {
            console.log("@controller ProductController @deleteProduct Error", err);
            return res.badRequest(err);
        }
    },

    
    

};

