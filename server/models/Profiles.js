const mongoose = require("mongoose");

const { Schema } = mongoose;

const profileSchema = new Schema({
  first_name: String,
  last_name: String,
  location: String,
});

const ProfilesModel = mongoose.model("profiles", profileSchema);


module.exports = ProfilesModel;