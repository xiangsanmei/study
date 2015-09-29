var fs = require('fs');
exports.index = function(req, res){
   
 var files = fs.readdirSync('public/images/baby');
  res.render('index', { title: 'My Little Star',imgs:files });
};


