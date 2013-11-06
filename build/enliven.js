(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.delete_samples = function() {
    return $('.delete').remove();
  };

  root.populate_list = function(root, list) {
    var elem, proto, row, _i, _len;
    proto = $('.proto', root);
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      row = list[_i];
      elem = proto.clone();
      populate_elem(elem, row.value);
      proto.after(elem);
    }
    return proto.remove();
  };

  root.populate_elem = function(root, data) {
    var classStr, elem, matches, prop, value, _results;
    _results = [];
    for (prop in data) {
      elem = $('.prop_' + prop, root);
      value = data[prop];
      classStr = elem.attr('class');
      matches = classStr != null ? classStr.match(/attr_(\w+)/) : void 0;
      if (matches) {
        _results.push(elem.attr(matches[1], value));
      } else {
        _results.push(elem.text(value));
      }
    }
    return _results;
  };

}).call(this);
