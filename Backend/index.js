const express = require('express');
require('dotenv').config()
var bodyParser = require('body-parser')
const dbConnection = require('./config/mongoose');
var session = require('express-session');
const Mongo_Url = process.env.MONGO_URL;
const userPassport = require('./config/passport');
const MongoStore = require('connect-mongo');


const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.set('trust proxy', 1)
app.use(session({
    secret: 'rkm traffic squad',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge:1000*60*60*24, sameSite:'none',secure:false},
    store: MongoStore.create({ mongoUrl: Mongo_Url,collectionName:"sessions" }),
  }))



app.use(userPassport.initialize());
app.use(userPassport.session());



app.get('/',(req,res)=>{
    res.send({
        "message":"Hello World"
    })
});

app.use('/auth',require('./routes/auth'));
app.use('/challan',require('./routes/challan'));

app.listen(8000, () => {
    console.log('Server is running on port 3000');
});