const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('chai').assert
const server = require('../controllers/books').getAllBooks
chai.use(chaiHttp)

describe('tests', () =>  {
	it('All books should return all books', () =>  {
		chai.request(server)
			.get('/all-books/')
			.end((err, res) => {
				assert.equal(res.status, 200)
				done()
			})
	})

})
