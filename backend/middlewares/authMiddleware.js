var Strings = require('../controllers/helpers/strings');
var passport = require('passport');
/**
 * This middleware validates that the user is logged in.
 * @khattab
 * @IOElgohary: Modified for JWT
 */
module.exports = function(req, res, next) {
    passport.authenticate('jwt', {
        session: false
    }, function (err, user) {
        if (err) {
            return res.json({
                errors:[{
                    type: Strings.ACCESS_DENIED,
                    msg: err
                }]
            })
        }
        if (!user) {
            return res.status(401).json({
                errors:[{
                    type: Strings.ACCESS_DENIED,
                    msg: "User not found."
                }]
            })
        }
        req.user = user;
        next();
    })(req, res, next);
};
