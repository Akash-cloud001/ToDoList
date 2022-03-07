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

const userSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category:{
    type:String,
    required:true
  },
  duedate:{
    type:String,
    required:true
  }
},);

const User_info = mongoose.model('User_info', userSchema);

module.exports = User_info;