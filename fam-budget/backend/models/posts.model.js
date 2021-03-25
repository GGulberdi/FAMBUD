
const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
//create post schema


const PostsSchema = new mongoose.Schema({
    storeName:String,
    date:Date,
    amount:Number,
    desc:String,  
    section:String
})

// let Posts = mongoose.model('posts', PostsSchema)
module.exports= mongoose.model('posts', PostsSchema)