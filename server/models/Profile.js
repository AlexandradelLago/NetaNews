const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const profileSchema = new Schema({
  birthday:{type:Date},
  name: {type:String},
  account:{type:Schema.Types.ObjectId, ref:"user"},
  profilePic: {type: String, default: ''},
  quotes:{
    category1:{type:String , default:''},
    category2:{type:String, default:''}
  },
  news:{
    category1:{type:String, default:''},
    category2:{type:String, default:''},
    category3:{type:String, default:''},
    language :{type:String, default:''},
    country:{type:String,default :''}
  }
});


module.exports = mongoose.model("Profile", profileSchema);

