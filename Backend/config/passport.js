const passport = require('passport');
const LocalStrategy = require('passport-local');
const {compare} = require('bcrypt');
const User = require('../models/User');



passport.use('user',new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
  },
  async function (req , email, password, done) {
      try{
        var db = req.usertype;
        switch (db) {
            case "User":
                 db = require('../models/User');
                break;
            case "Police":
                 db = require('../models/PoliceDb');
                break;
            case "Admin":
                 db = require('../models/AdminDb');
                break;
            default:
                return done(null, false);
        }

        var user = await db.findOne({
          email: email
        })
  
        if (!user) { return done(null, false); }
        if (! await compare(password , user.password)) { return done(null, false); }
        user['usertype'] = req.usertype;
        return done(null, user);
      }
  
      catch(err){
         return done(err);
      }
      }
));



    passport.serializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, { id: user._id, email: user.email , usertype: user.usertype});
        });
      });
      
      passport.deserializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, user);
        });
      });


module.exports = passport;