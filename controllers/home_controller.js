const User_info = require("../models/user");
var i = 0;
module.exports.home = function(req, res){
  User_info.find({},function(err,info){
    if(err){
      console.log('error in fetching contact in db');
      return;
    }
    
    return res.render('home',{
      list: "To-Do List",
      user_List: info
    });
  });
  
}

//module.exports.actionName = function(res,res){}
