
 const mongoose = require("mongoose");
 const { Schema } = mongoose;

 const profileSchema = new Schema({
   first_name: String,required: true, 
   last_name: String,
   location: String,
 });

 mongoose.model("profiles", profileSchema);