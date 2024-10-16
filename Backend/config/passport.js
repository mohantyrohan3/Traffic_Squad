import passport from 'passport';
import {compare} from 'bcrypt';
import LocalStrategy from 'passport-local';
import User from '../models/User.js';
import Police from '../models/PoliceDb.js';
import Admin from '../models/AdminDb.js';



passport.use('user',new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
  },
  async function (req , email, password, done) {
      try{
        var db = req.usertype;
        switch (db) {
            case "User":
                 db = User;
                break;
            case "Police":
                 db = Police;
                break;
            case "Admin":
                 db = Admin;
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


export default passport;