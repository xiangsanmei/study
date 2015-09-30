var express = require('express')
   , less = require('less')
   , koala = require('koala');
   
var app = express()
function compile(str,path){
   return less(str)
	.set('filename',path)
	.use(koala())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(less.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})
app.listen(8000)

