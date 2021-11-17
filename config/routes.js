/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

//ProductController
'GET /login'                : 'ProductController.loginverify',
'POST /login/product'       : 'ProductController.createProduct',
'GET /login/product'        : 'ProductController.viewAllProduct',
'GET /login/product/:id'    : 'ProductController.viewSingleProduct',
'PUT /login/product/:id'    : 'ProductController.updateProduct',
'DELETE /login/product/:id' : 'ProductController.deleteProduct',


};
