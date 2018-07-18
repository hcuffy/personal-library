$(document).ready(function() {
	let addField = document.getElementById('book-title');
	if (addField) {
		addField.addEventListener('invalid', function() {
			this.setCustomValidity('Please enter a title.');
		});

		addField.addEventListener('input', function() {
			this.setCustomValidity('');
		});
	}

	let getField = document.getElementById('single-title');
	if (getField) {
		getField.addEventListener('invalid', function() {
			this.setCustomValidity('Please enter an id.');
		});

		getField.addEventListener('input', function() {
			this.setCustomValidity('');
		});
	}

	$('.comment-btn').click(function() {
		let id = this.id;
		$.ajax({
			url: '/add-comment/' + id,
			type: 'POST',
			data: $('.comment-form').serialize(),
			success: function(result) {
				window.location.reload();
			},
			error: function() {
				alert('Could not add comment.');
			}
		});
	});

	$('.multi-btn').click(function() {

		$.ajax({
			url: '/all-books/',
			type: 'GET',
			success: function(result) {
					document.location.href = '/all-books/';
			},
			error: function() {
				alert('Could not get the books.');
			}
		});
	});
});
