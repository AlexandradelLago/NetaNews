const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const profileSchema = new Schema({
  birthday:{type:Date},
  name: {type:String},
  account:{type:Schema.Types.ObjectId, ref:"user"},
  profilePic: {type: String, default: ''}
});


module.exports = mongoose.model("Profile", profileSchema);

