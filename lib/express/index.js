console.log('express/index.js')

var express = require('express')
, http = require('http')
, morgan = require('morgan')
, config = require('../configuration')
, heartbeat = require('../routes/heartbeat')
, notFound = require('../middleware/notFound')
, app = express()

app.set('port', config.get('express:port'))


// it was replaced by morgan
// app.use(express.logger({immediate: true, format: 'dev'}))

app.use(morgan('combined'))

app.get('/heartbeat', heartbeat.index)

app.use(notFound.index)

http.createServer(app).listen(app.get('port'), function() {
	console.log('server started -> localhost:' + app.get('port'))
})

module.exports = app



