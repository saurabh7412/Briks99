


const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    image: {type : String, required : true},
    price: {type : Number, required : true},
    title: {type : String, required : true},
    location: {type : String, required : true},
    lat : {type : String, required : true},
    long : {type : String, required : true},
    description: {type : String, required : true},
    type: {type : String, required : true},
    bedrooms:{type : String, required : true},
    bathrooms:{type : String, required : true},
    surface: {type : String, required : true},
})

const Posts = mongoose.model('post',postSchema);

module.exports = Posts;