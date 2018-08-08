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

	// it('should not add book with no title', (done) =>  {
	// 	chai.request(server)
	// 		.post('/new/book/')
	// 		.set('content-type', 'application/x-www-form-urlencoded')
	// 		.send({})
	// 		.end((err, res) => {
	// 			assert.equal(res.status, 200)
	// 			assert.equal(res.text, 'Missing request title.')
	// 			done()
	// 		})
	// })

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

	// it('should get book by id', (done) =>  {
	// 	chai.request(server)
	// 		.get('/single-book/')
	//     .query({ id : '5b6a7db30469c04f7d3164e7' })
	// 		.end((err, res) => {
	// 			assert.equal(res.status, 200)
	// 			done()
	// 		})
	// })

	// it('should not get book without id', (done) =>  {
	// 	chai.request(server)
	// 		.get('/single-book/')
	//     .query({})
	// 		.end((err, res) => {
	// 			assert.equal(res.status, 200)
	// 			assert.equal(res.text, 'No id was was given.')
	// 			done()
	// 		})
	// })

	it('should add comment', (done) =>  {
		let id = '5b6a7db30469c04f7d3164e7'
		chai.request(server)
			.post('/add-comment/' + id)
			.set('content-type', 'application/x-www-form-urlencoded')
			.send({ comment : 'This is a new comment' })
			.end((err, res) => {
				const dom = new JSDOM(res.text)
				let output = dom.window.document.body.querySelector('.comment-section').textContent
				assert.equal(res.status, 200)
				assert.isNotEmpty(output)
				done()
			})
	})

})
