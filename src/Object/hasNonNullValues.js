/**
 * Created by amarov on 3/21/17.
 */

function hasNonNullValues(obj) {
  /* eslint-disable no-restricted-syntax */
  for (const key of Object.keys(obj)) {
    const field = obj[key];
    if (field && Object.keys(field)) {
      hasNonNullValues(field);
    }
    if (field) {
      return true;
    }
  }
  return false;
}

export default hasNonNullValues;
