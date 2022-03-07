const User_info = require("../models/user");

module.exports.add = function(req,res){
  // return res.end("<h1>hello</h1>");
  // let d = req.body.getDate();
  // console.log(d)
  User_info.create({
    description:req.body.description,
    category:req.body.category,
    duedate:req.body.duedate,
  },function(err,newInfo){
    if(err){
      console.log('Error in creating a contect!');
      return;
    }
    console.log('**************',newInfo);
    return res.redirect('back');

  })

}