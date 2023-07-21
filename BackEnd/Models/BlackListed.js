


const mongoose = require('mongoose');

const BLSchema = mongoose.Schema({
    token : {type : [String], required : true}
})


const BL = mongoose.model('blacklist',BLSchema);

module.exports = BL;