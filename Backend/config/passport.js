const passport = require('passport');
const LocalStrategy = require('passport-local');
const UserDb = require('../models/User');
const {compare} = require('bcrypt');


passport.use('user',new LocalStrategy({
    usernameField: 'email'
  },
  async function (email, password, done) {
      try{
        const user = await UserDb.findOne({
          email: email
        })
  
        if (!user) { return done(null, false); }
        if (! await compare(password , user.password)) { return done(null, false); }
        return done(null, user);
      }
  
      catch(err){
         return done(err);
      }
      }
    ));



    passport.serializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, { id: user._id, email: user.email });
        });
      });
      
      passport.deserializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, user);
        });
      });


module.exports = passport;