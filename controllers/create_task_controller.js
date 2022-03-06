
module.exports.add = function(req,res){
  // return res.end("<h1>hello</h1>");
  console.log(req.body);
  console.log(req.body.description);
  console.log(req.body.category);
  console.log(req.body.duedate);

  return res.redirect('/');
}