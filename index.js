function myfun() {
	var input = document.querySelector('input');
	let ul = document.getElementById('ul');
	let item = document.createTextNode(input.value);
	let li = document.createElement('li');

	li.appendChild(item);
	var span = document.createElement('span');
	span.className = 'span';
	var txt = document.createTextNode('\u00D7');

	span.appendChild(txt);
	li.appendChild(span);

	if (input.value === '') {
		alert('You did not enter any to-do');
	} else {
		ul.appendChild(li);
		document.getElementById('input').value = '';
	}

	input.addEventListener('keypress', (e) => {
		if (e.keyCode == 13) {
			ul.appendChild(li);
		}
	});

	let closebtn = document.getElementsByClassName('span');
	for (let i = 0; i < closebtn.length; i++) {
		closebtn[i].onclick = function() {
			let clo = this.parentElement;
			clo.style.display = 'none';
		};
	}
}
