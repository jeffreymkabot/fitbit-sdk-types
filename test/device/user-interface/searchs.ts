import document from 'document';

let demo = document.getElementById('demo');
demo.text = 'Hello World!';

let elements = document.getElementsByClassName('red');
elements.forEach(function(element) {
	element.text = 'Hey Red!';
});

let circles = document.getElementsByTagName('circle');
circles.forEach(function(circle) {
	circle.style.fill = 'blue';
});
