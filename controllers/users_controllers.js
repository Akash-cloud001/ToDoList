module.exports.profile = function(req,res){
  return res.render('user',{
    user: 'My Account'
  })
}