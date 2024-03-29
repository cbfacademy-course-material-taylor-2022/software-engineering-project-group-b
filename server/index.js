require("dotenv").config();

 const express = require("express");
 const mongoose = require("mongoose");
 const bodyParser = require("body-parser");


 // IMPORT YOUR SCHEMAS HERE
 require("./models/Profiles"); //This is just an example. Don't forget to delete this

//  const app = express();
 var cors = require('cors')
  , app = express();
app.use(cors());

 // This is where your API is making its initial connection to the database
 mongoose.Promise = global.Promise;
 mongoose.set("strictQuery", true);
 mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
   useNewUrlParser: true,
 });

//  client.connect(err => {
//     const collection = client.db("test").profiles("profiles");
//     profiles,countDocuments({}, 
//       function(err, count) {
//       console.log(count);
//     })
//     // perform actions on the collection object
//     client.close();


  // This is where you are telling your API to use the body-parser middleware


 app.use(bodyParser.json());

 // IMPORT YOUR API ROUTES HERE
 // Below is just an example. Don't forget to delete it. 
 // It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
 require("./routes/profilesRoutes")(app); 

 const PORT = process.env.PORT;
 app.listen(PORT, () => {
   console.log(`API running on port ${PORT}`)
  });

  
