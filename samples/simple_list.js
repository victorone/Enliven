// Logic to populate a simple list example using Enliven.
// Make sure to include both jQuery and the (generated) build/enliven.js file
// before this one.

$(function () {
	var animals = [
	// Sorry about the ugly nested 'value' property...
	{ value: { name: 'Real Popo', species: 'Horse' } },
	{ value: { name: 'Real Moomoo', species: 'Cow' } },
	{ value: { name: 'Real Jumpy', species: 'Rabbit' } }
	];
	
	delete_samples();
	populate_list($('#animals'), animals);
});
