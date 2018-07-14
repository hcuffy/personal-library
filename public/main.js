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

	$('.comment').click(function() {
		let id = this.id;
		console.log(id);
		// $.ajax({
		// 	url: '/issues/' + project + '/' + id,
		// 	type: 'DELETE',
		// 	data: {
		// 		id: id
		// 	},
		// 	success: function(result) {
		// 		window.location.reload();
		// 	},
		// 	error: function() {
		// 		alert('Issue ' + id + ' could not be deleted.');
		// 	}
		// });
	});
});
