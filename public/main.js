$(document).ready(function() {
	document.getElementById('book-title').addEventListener('invalid', () => {
		this.setCustomValidity('Please enter a title.');
	});

	document.getElementById('book-title').addEventListener('input', () => {
		this.setCustomValidity('');
	});
});
