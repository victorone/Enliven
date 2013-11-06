(function() {
  var delete_samples, populate_elem, populate_list;
  delete_samples = function() {
    return $('.delete').remove();
  };
  populate_list = function(root, list) {
    var elem, proto, row, _i, _len;
    proto = $('.proto', root);
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      row = list[_i];
      elem = proto.clone();
      populate_elem(elem, list[row].value);
      proto.after(elem);
    }
    return proto.remove();
  };
  populate_elem = function(root, data) {
    var attr, classStr, elem, matches, prop, value, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      prop = data[_i];
      elem = $('.prop_' + prop, root);
      value = data[prop];
      classStr = elem.attr('class');
      matches = classStr != null ? classStr.match(/attr_(\w+)/) : void 0;
      _results.push(matches ? (attr = matches[1], elem.attr(attr, value)) : elem.text(value));
    }
    return _results;
  };
}).call(this);
