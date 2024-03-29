const passport = require('passport');
const LocalStrategy = require(passport-local).Strategy;
const connection = require('./db');
const { validPassword } = require('../lib/passwordUtils');
const User = connection.models.User;

const customFields = {
    usernameField: 'uname',
    passwordField: 'password'
}


const verifyCallback = (username, password, done) => {
    User.findOne({ username: username})
        .then((user) => {

            if(!user) {return done(null, false)}

            const isValid = validPassword(password, user.hasHook, user.salt);

            if(isValid){
                return done(null, user);
            }else{return done(null, false)}
        
        })
        .catch((err) => {
            done(err)
        })
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async (userId, done) => {
    User.findByPk(userId)
    .then((user) => {
        done(null, user);
    })
    .catch(err => done(err))
})
