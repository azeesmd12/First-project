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

//UsersController
'POST /user/login'        : 'UsersController.loginverify',
'POST /user/create'       : 'UsersController.createUser',
'GET  /user/viewall'      : 'UsersController.viewAllUser',
'GET /user/profile/:username'   : 'UsersController.viewProfile',
'PUT /user/update/:id'    : 'UsersController.updateUser',
'DELETE /user/delete/:id' : 'UsersController.deleteUser',

//ProductController
'POST /product/create'        : 'ProductController.createProduct',
'GET /product/viewall'        : 'ProductController.viewAllProduct',
'GET /product/viewone/:id'    : 'ProductController.viewSingleProduct',
'PUT /product/update//:id'    : 'ProductController.updateProduct',
'DELETE /product/delete/:id'  : 'ProductController.deleteProduct',


};
