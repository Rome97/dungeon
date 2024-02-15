const express = require('express');
const session = require('express-session');
const app = express();
var passport = require('passport');
var crypto = require('crypto');
const port = 3001;
const sequelize = require('./config/db');
const pg = require('pg');
const PgStore = require('connect-pg-simple')(session);


const pool = new pg.Pool({
    user: 'your_username',
    password: 'your_password',
    host: 'your_host',
    port: 'your_port',
    database: 'your_database'
  });


  const pgStoreOptions = {
    pool: pool,
    tablename: 'sessions' // Optional: Specify the table name for storing sessions
  };



  app.use(session({
    store: new PgStore(pgStoreOptions),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }));



require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


require('../config/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
})



app.get('/', (req, res) => {
  res.send('Hello from your Node.js server!');
});

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to PostgreSQL database established successfully.');
    } catch (error) {
        console.error('Unable to connect to PostgreSQL database:', error);
        process.exit(1);
    }
});
