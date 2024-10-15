const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  PROP_ID:String
},{strict:false});
const PropertyModel = mongoose.model("properties", PropertySchema);
module.exports = PropertyModel;