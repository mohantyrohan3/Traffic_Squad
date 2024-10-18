import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import './config/mongoose.js';
const Mongo_Url = process.env.MONGO_URL;
import userPassport from './config/passport.js';
import authRouter from './routes/auth.js';
import challanRouter from './routes/challan.js';
import cors from 'cors';


const app = express();


app.use(cors({
    origin: '*',
    credentials: true
}));
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

app.use('/auth',authRouter);
app.use('/challan',challanRouter);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});