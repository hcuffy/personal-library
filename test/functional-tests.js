const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert
const server = require('../server')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

chai.use(chaiHttp)

describe('functional tests', () =>  {
// it('should add a booking', (done) =>  {
// 	chai.request(server)
// 		.post('/new/book/')
// 		.set('content-type', 'application/x-www-form-urlencoded')
// 		.send({ title : 'New book of dreams' })
// 		.end((err, res) => {
// 			assert.equal(res.status, 200)
// 			done()
// 		})
// })

	it('should not add book with no title', (done) =>  {
		chai.request(server)
			.post('/new/book/')
			.set('content-type', 'application/x-www-form-urlencoded')
			.send({})
			.end((err, res) => {
				console.log(res.text)
				assert.equal(res.status, 200)
				done()
			})
	})

	// it('should get all books', (done) =>  {
	// 	chai.request(server)
	// 		.get('/all-books/')
	// 		.end((err, res) => {
	// 			const dom = new JSDOM(res.text)
	// 			let output = dom.window.document.body.querySelector('.all-books').textContent
	// 			assert.equal(res.status, 200)
	// 			assert.isNotEmpty(output)
	// 			done()
	// 		})
	// })

})
