$(document).ready(function() {
	let addField = document.getElementById('book-title')
	if (addField) {
		addField.addEventListener('invalid', function() {
			this.setCustomValidity('Please enter a title.')
		})

		addField.addEventListener('input', function() {
			this.setCustomValidity('')
		})
	}

	let getField = document.getElementById('single-title')
	if (getField) {
		getField.addEventListener('invalid', function() {
			this.setCustomValidity('Please enter an id.')
		})

		getField.addEventListener('input', function() {
			this.setCustomValidity('')
		})
	}

	$('.comment-btn').click(function() {
		let id = this.id
		$.ajax({
			url: '/add-comment/' + id,
			type: 'POST',
			data: $('.comment-form').serialize(),
			success: function(result) {
				window.location.reload()
			},
			error: function() {
				$.alert({
					title: 'Error!',
					content: 'Could not add comments.',
					type: 'red'
				})
			}
		})
	})

	$('.multi-btn').click(function() {

		$.ajax({
			url: '/all-books/',
			type: 'GET',
			success: function(result) {
				document.location.href = '/all-books/'
			},
			error: function() {
				$.alert({
					title: 'Error!',
					content: 'Could not get the book.',
					type: 'red'
				})
			}
		})
	})
})

$('.delete-btn').click(function() {
	let id = this.id
	$.ajax({
		url: '/remove/' + id,
		type: 'DELETE',
		data: {
			id: id
		},
		success: function(result) {
			$.confirm({
				title: 'The book was deleted.',
				content: result,
				type: 'green',
				typeAnimated: true,
				buttons: {
					ok: {
						text: 'OK',
						btnClass: 'btn-green',
						action: function() {
							document.location.href = '/'
						}
					}
				}
			})
		},
		error: function() {
			$.alert({
				title: 'Error!',
				content: 'The book (' + id + ') could not be deleted.',
				type: 'red'
			})
		}
	})
})


$('.delete-all-btn').click(function() {
	$.ajax({
		url: '/remove-all/',
		type: 'DELETE',
		success: function(result) {
			$.confirm({
				title: 'All books were deleted.',
				content: result,
				type: 'green',
				typeAnimated: true,
				buttons: {
					ok: {
						text: 'OK',
						btnClass: 'btn-green',
						action: function() {
							document.location.href = '/'
						}
					}
				}
			})
		},
		error: function() {
			$.alert({
				title: 'Error!',
				content: 'The books could not be deleted.',
				type: 'red'
			})
		}
	})
})
