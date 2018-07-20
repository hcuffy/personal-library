const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema(
	{
		title: String,
		comments: Array
	},
	{ timestamps: true }
)

const ModelClass = mongoose.model('book', BookSchema)
module.exports = ModelClass
