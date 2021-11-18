
const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {

    if (req.headers.authorization) {
        let accesstoken = req.headers.authorization.split(' ')[1];
        let decoded = jwt.decode(accesstoken);
        try {
        let resultToken = jwt.verify(accesstoken,'This is your secret key',{ algorithm:'RS256'});
        if(resultToken){
            if (decoded.role == 'admin') {
                next();
            }
        }
             else {
                res.send("Token is not valid");
            }    
        } catch (err) {

            sails.log.error("@Policy isAdmin @Method verify @Message Error:", err);
            return res.badRequest({ message: "You are not authorized." });

        }
    }
    else{
        res.badRequest("token is not available ");
    }

}