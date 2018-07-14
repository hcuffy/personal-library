const Book = require('../models/book');

exports.addBook = (req, res, next) => {
	const { title } = req.body;
	const newBook = new Book({
		title,
		comment: []
	});
	newBook.save(err => {
		if (err) {
			return next(err);
		}
	});
	res.render('index');
};

exports.getABook = (req, res, next) => {
	Book.findById(req.params.id, function(err, book) {
		if (err) {
			return err;
		}
		res.render('single-book', { book });
	});
};
