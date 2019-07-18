export const mapValueToKey = (object, value) =>
  Object.keys(object).find(key => object[key] === value);
