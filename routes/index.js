const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');

router.post('/new/book/', bookController.addBook);
router.get('/book/', bookController.getABook);
router.get('/', (req, res) => {
	res.render('index');
});

module.exports = router;
