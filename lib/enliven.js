// Copyright 2011, Victor1 LLC
// Author: David Bergman


// Delete all sample data, which is marked with a class 'delete'
function delete_samples() {
	$('.delete').remove();
}

// Populate a JSON list, using the given class as top element(s),
// using a sub element with class 'proto'.
// The list is assumed to be an array with each element
// have a 'value' property which is the actual data.
function populate_list(root, list) {
	var proto = $('.proto', root);
	for (var row in list) {
		var elem = proto.clone();
		populate_elem(elem, list[row].value);
		proto.after(elem);
	}
	proto.remove();
}

// Populate an element using a JSON object,
// looking for classes 'prop_<attr>' where <attr>
// is the attribute name.
// If such an element has a class 'attr_<name>',
// we set the attribute name, and if not,
// we use the text node
function populate_elem(root, data) {
	for (var prop in data) {
		var elem = $('.prop_' + prop, root);
		var value = data[prop];
		var classStr = elem.attr('class');
		var matches = classStr && classStr.match(/attr_(\w+)/);
		if (matches) {
			var attr = matches[1];
			elem.attr(attr, value);
		} else
			elem.text(value);
	}
}
