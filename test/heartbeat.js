console.log('test/heartbeat.js')

var app = require('../app')
, request = require('supertest')

console.log(request)

console.log(app)

describe('vision heartbeat api', function() {
	it('should respond with 200', function(done) {
		request(app)
		.get('/heartbeat')
		.expect('Content-Type', /json/)
		.expect(200, done)
	})
})

describe('vision heartbeat api', function() {
	describe('when requesting resource /missing', function() {
		it('should respond with 404', function(done) {
			request(app)
			.get('/missing')
			.expect('Content-Type', /json/)
			.expect(404, done)
		})
	})
})