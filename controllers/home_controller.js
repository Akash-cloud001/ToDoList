module.exports.home = function(req, res){
  return res.end("<h1>Express is up for TODO</h1>")
}

//module.exports.actionName = function(res,res){}
module.exports.user = function(req,res){
  return res.end("<p> Hey Its me User </p>");
}