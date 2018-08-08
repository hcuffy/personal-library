const Book = require('../models/book')

exports.addBook = (req, res, next) => {

	if (Object.keys(req.body).length === 0 && req.body.constructor === Object){
		res.end('Missing request title.')
		return
	}

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
	if (Object.keys(req.query).length === 0 && req.query.constructor === Object || req.query.id == undefined){
		res.end('No id was was given.')
		return
	}
	Book.findById(req.query.id, (err, book) => {
		if (err) {
			return next(err)
		}
		if (book == null){
			res.render('index')
		} else {
			res.render('single-book', {
				book
			})
		}
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
	 (err, book) => {
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
	Book.findByIdAndRemove(req.params.id, (err, book) => {
		if (err) {
			return next(err)
		}
		if (book == null){
			res.end('Could not find book for deletion')
		} else {
			res.end('success')
		}
	})
}

exports.removeAllBooks = (req, res, next) => {
	Book.remove({}, (err, book) => {
		if (err) {
			return next(err)
		}
		res.end('success')
	})
}
