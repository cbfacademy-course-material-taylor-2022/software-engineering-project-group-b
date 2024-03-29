
 const mongoose = require("mongoose");
 const { Schema } = mongoose;

 const profileSchema = new Schema({
   first_name: String,
   last_name: String,
   email: String,
   location: String,
 });

 mongoose.model("profiles", profileSchema);