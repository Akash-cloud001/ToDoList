const User_info = require('../models/user');
// console.log("dlt is ready")

module.exports.delete = function(req,res){
  console.log(req.query);
  const checkedId = req.query.id;
  console.log(checkedId);
  User_info.findByIdAndDelete(checkedId , function(err){
    if(err){
      console.log("error 500");
    }  
    console.log('Successfully deleted');
    return res.redirect('back');
  });
}