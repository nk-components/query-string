'use string';

var loc = window.location;

/**
 * Returns query string param value.
 *
 * @return {Sting}
 */

exports = module.exports = value;

function value(prop) {
  return list()[prop];
}

/**
 * If the list has a property.
 *
 * @return {Boolean}
 */

exports.has = has;

function has(prop) {
  return prop in list();
}

/**
 * Returns the list of query string.
 *
 * @return {Object}
 */

exports.list = list;

function list() {
  var values = Object.create(null);
  var query = loc.search.substring(1);
  var vars = query.split('&');

  var len = vars.length;
  var i, pair, key, val;

  for (i = 0; i < len; i++) {
    pair = vars[i].split('=');
    key = decodeURIComponent(pair[0]);
    val = decodeURIComponent(pair[1]);
    values[key] = val;
  }

  return values;
}
