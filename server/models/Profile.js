const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const profileSchema = new Schema({
 // birthday:{type:Date},
  sign: {type:String},
  account:{type:Schema.Types.ObjectId, ref:"user"},
  profilePic: {type: String, default: ''},
  quote:{type:String , default:''},
  news:{
    language :{type:String, default:''},
    country:{type:String,default :''}
  }
});


module.exports = mongoose.model("Profile", profileSchema);

