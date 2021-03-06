const path = require('path')
const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost:27017/personal-library',
	{ useNewUrlParser: true }
)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json('*/*'))
app.use(helmet.noCache())
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	next()
})
app.use(function(err, req, res, next) {
	console.error(err.stack)
	next(err)
})
app.use(function(err, req, res, next) {
	res.status(500)
	console.error(err.stack)
	res.render('error', { error: err })
})

app.use('/', routes)
const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log('Express server running on port', port)
})

module.exports = app
