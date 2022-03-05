// connect to library
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/to_do_list_db');

//acquire the connection to check if it is successful
const db = mongoose.connection;

//error
db.on('err',console.error.bind(console, 'error connecting to db'));

//up and running then print the message
db.once('open', function(){
  console.log('succcessfuly connected to database');
})

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password:{
//     type:String,
//     required:true
//   },
//   name:{
//     type:String,
//     required:true
//   }
// }, {
//   timestamps: true  //it is created at and updated at
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;