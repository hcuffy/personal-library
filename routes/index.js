const express = require('express')
const router = express.Router()
const bookController = require('../controllers/books')

router.delete('/remove/:id', bookController.removeBook)
router.post('/add-comment/:id', bookController.addComment)
router.post('/new/book/', bookController.addBook)
router.get('/all-books/', bookController.getAllBooks)
router.get('/single-book/', bookController.getABook)
router.get('/', (req, res) => {
	res.render('index')
})

module.exports = router
