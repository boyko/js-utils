"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by amarov on 3/21/17.
 */

function hasNonNullValues(obj) {
  /* eslint-disable no-restricted-syntax */
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var field = obj[key];
      if (field && Object.keys(field)) {
        hasNonNullValues(field);
      }
      if (field) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}

exports.default = hasNonNullValues;