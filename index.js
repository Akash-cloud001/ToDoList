const express = require('express');
const { path } = require('express/lib/application');
const db = require('./models/user');
const app = express();
const port = 8000;
//for static files
app.use(express.static('views'));
// app.use(express.static('views/css'));
//use express router
app.use('/', require('./routes')); 

//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
 

app.listen(port,(err)=>{
  if(err){
    console.log(`Error in running Server: ${port}`);
    
  }
  
  console.log(`Server is running on port : ${port}`);
});