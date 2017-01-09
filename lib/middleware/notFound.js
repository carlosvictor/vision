console.log('middleware/notFound.js')

exports.index = function(req, res, next) {
	res.status(404).json('Not Found.')
}