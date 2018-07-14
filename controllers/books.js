const Book = require('../models/book');

exports.addBook = (req, res, next) => {
	Book.find({}, (err, polls) => {
		if (err) {
			return next(err);
		}
		res.render('index');
	});
};
