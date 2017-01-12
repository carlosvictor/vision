var winston = require('winston')
, config = require('../configuration')


function Logger() {
	return winston.add(winston.transport.File, 
	{ 
		filename: config.get('logger:filename'), 
		maxsize: 1048576,
		maxFiles: 3,
		level: config.get('logger:level')
	})
}

module.exports = new Logger()