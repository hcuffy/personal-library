const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert

const server = require('../server')
chai.use(chaiHttp)

describe('tests', () =>  {
	it('All books should return all books', (done) =>  {
		chai.request(server)
			.get('/all-books/')
			.end((err, res) => {
				assert.equal(res.status, 200)
				done()
			})
	})

	it('Get single book', (done) =>  {
		chai.request(server)
			.get('/single-book/')
			.query({ id: '5b521096a4ce3b6071b138a6'  })
			.end((err, res) => {
				assert.equal(res.status, 200)
				done()
			})
	})

it('A book should be added', (done) =>  {
	chai.request(server)
		.post('/new/book/')
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({ title: 'test book', comment: ['test book'] })
		.end((err, res) => {
			assert.equal(res.status, 200)
			done()
		})
})

	it('Should add comment', (done) =>  {
		chai.request(server)
			.post('/add-comment/5b52108ea4ce3b6071b138a4')
			.set('content-type', 'application/x-www-form-urlencoded')
			.send({ comment: ['test book'] })
			.end((err, res) => {
				assert.equal(res.status, 200)
				done()
			})
	})

	it('Book should not be removed', (done) =>  {
		chai.request(server)
			.delete('/remove/aaaa108ea4ce3b6071b13fff')
			.end((err, res) => {
				assert.equal(res.text, 'Could not find book for deletion')
				done()
			})
	})

	it('Remove all books', (done) =>  {
		chai.request(server)
			.delete('/remove-all/')
			.end((err, res) => {
				assert.equal(res.status, 200)
				done()
			})
	})

})
