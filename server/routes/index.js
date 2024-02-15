const router = require('express').Router();

const passport = require('passport');

const genPassword = require('../lib/passwordUtils').genPassword;

const connection = require('../config/db');

const User = connection.models.User;



//TODO 

//POST ROUTES


router.post('/register', (req, res, next) => {

    const saltHash = genPassword(req.body.pw);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.uname,
        hash: hash,
        salt: salt
    });

    newUser.save()
    .then((user) =>{
        console.log(user);
    });

    res.redirect('/login');
});

//TODO 

router.post('/login', passport.authenticate('local', {failureRedirect: '/login-failure', successRedirect: 'login-redirect'}));