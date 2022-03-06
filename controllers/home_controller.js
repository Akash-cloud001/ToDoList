var user_task = [
  {
    discription:"akash",
    category: "Personal",
    duedate: "17-02-2022"
  }
]
module.exports.home = function(req, res){
  return res.render('home',{
    list: "To-Do List",
    user_List: user_task
  });
}

//module.exports.actionName = function(res,res){}
