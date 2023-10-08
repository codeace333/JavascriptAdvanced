class CustomUtilities {
 static getUniqueArray(array) {
    return [...new Set(array)];
 }

 static getUniqueObjectsByProperty(arrayOfObjects, property) {
    return [...new Map(arrayOfObjects.map(obj => [obj[property], obj]))].map(
      ([, obj]) => obj
    );
 }

 static sortByProperty(arrayOfObjects, property, isAscending = true) {
    return arrayOfObjects.sort((a, b) => {
      if (a[property] < b[property]) {
        return isAscending ? -1 : 1;
      }
      if (a[property] > b[property]) {
        return isAscending ? 1 : -1;
      }
      return 0;
    });
 }

 static propertyHasValue(obj, property, value) {
    return obj.hasOwnProperty(property) && obj[property] === value;
 }

 static isNonEmptyString(value) {
    return typeof value === 'string' && value.trim() !== '';
 }

 static isDefined(value) {
    return typeof value !== 'undefined';
 }

 static isArray(value) {
    return Array.isArray(value);
 }

 static isObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value);
 }

 static isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
 }

 static deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
 }
}