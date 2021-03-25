
const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
//create post schema


const EarningsSchema = new mongoose.Schema({
    incomefrom:String,
    date:Date,
    amount:Number,
    desc:String,  
})

// let Posts = mongoose.model('posts', PostsSchema)
module.exports= mongoose.model('gains', EarningsSchema)