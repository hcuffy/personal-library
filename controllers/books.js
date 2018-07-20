const Book = require('../models/book')

exports.addBook = (req, res, next) => {
	const {
		title
	} = req.body
	const newBook = new Book({
		title,
		comment: []
	})
	newBook.save(err => {
		if (err) {
			 return next(err)
		 }
	})
	res.render('index')
}

exports.getABook = (req, res, next) => {

	Book.findById(req.query.id, function (err, book) {
		if (err) {
			return err
		 }
		res.render('single-book', {
			book
		})
	})
}

exports.addComment = (req, res, next) => {
	Book.findByIdAndUpdate({
		_id: req.params.id
	}, {
		$push: {
			comments: req.body.comment
		}
	}, {
		new: true
	},
	function (err, book) {
		if (err) {
			return next(err)
		}
		res.render('single-book', {
			book
		})
	}
	)
}

exports.getAllBooks = (req, res, next) => {
	Book.find({}, (err, books) => {
		if (err) {
			return next(err)
		}
		res.render('all-books', {
			books
		})
	})

}

exports.removeBook = (req, res, next) => {
	Book.findByIdAndRemove(req.params.id, err => {
		if (err) {
			return next(err)
		}
		res.end('success')
	})
}
