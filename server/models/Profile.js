const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const profileSchema = new Schema({
  username: {type:String},
  birthday:{type:Date},
  name: {type:String},
  email: {type:String},
  account:{type:Schema.Types.ObjectId, ref:"user"},
  
});


module.exports = mongoose.model("Profile", profileSchema);

