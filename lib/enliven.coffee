# File: enliven.coffee
# Copyright 2011, Victor1 LLC
# Author: David Bergman

root = exports ? this

# Delete all sample data, which is marked with a class 'delete'
root.delete_samples = -> $('.delete').remove()

# Populate a JSON list, using the given class as top element(s),
# using a sub element with class 'proto'.
# The list is assumed to be an array with each element
# have a 'value' property which is the actual data.
root.populate_list = (root, list) ->
	proto = $ '.proto', root
	for row in list
		elem = proto.clone()
		populate_elem elem, row.value
		proto.after elem
	proto.remove()

# Populate an element using a JSON object,
# looking for classes 'prop_<attr>' where <attr>
# is the attribute name.
# If such an element has a class 'attr_<name>',
# we set the attribute name, and if not,
# we use the text node
root.populate_elem = (root, data) ->
	for prop of data
		elem = $('.prop_' + prop, root)
		value = data[prop]
		classStr = elem.attr('class')
		matches = classStr?.match(/attr_(\w+)/)
		if matches
			elem.attr(matches[1], value)
		else
			elem.text(value)

