const  mongoose = require('mongoose');
const Mongo_Url = process.env.MONGO_URL;

mongoose.connect(Mongo_Url,{
    family: 4 // Uses Ipv4
});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'Error Connecting to Db'));

db.once('open',function(){
    console.log('Successfully Connected To database');
});