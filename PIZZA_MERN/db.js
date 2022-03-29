const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://rahul:Rahul@cluster0.9nuac.mongodb.net/mern-pizza'

mongoose.connect(mongoURL , {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log("mongo Db connection sucessfull");
})

db.on('error', ()=>{
        console.log("Connection failed");
})

module.exports =mongoose