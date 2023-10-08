
class CustomUtilitiesFunctions {
   // Get unique values from an array
 static getUniqueArray(arr) {
    return [...new Set(arr)];
 }

   // Get unique objects by a specific key
 static getUniqueObjectsByProperty(arr, key) {
    const seen = new Set();
    return arr.filter(obj => {
      const value = obj[key];
      if (!seen.has(value)) {
        seen.add(value);
        return true;
      }
      return false;
    });
 }

   // Sort an array of objects by a specific key
 static sortByProperty(arr, key, ascending = true) {
    return arr.slice().sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      return ascending ? valueA - valueB: valueB - valueA;
    });
 }

   // Check if an object has a property with a specific value
 static propertyHasValue(obj, property, value) {
    return obj.hasOwnProperty(property) && obj[property] === value;
 }

   // Validate if a value is a non-empty string
 static isNonEmptyString(value) {
    return typeof value === 'string' && value.trim() !== '';
 }

   // Validate if a value is defined (not null or undefined)
 static isDefined(value) {
    return value !== null && value !== undefined;
 }

   // Validate if a value is an array
 static isArray(value, skipEmpty = true) {
    return (true == skipEmpty ) ? Array.isArray(value): (value && value.length > 0 && Array.isArray(value));
 }

   // Validate if a value is an object
 static isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
 }

   // Validate if a value is a number
 static isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value);
 }

 // Deep clone an object
  static deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; // Return primitive types and null as is
    }
  
    if (Array.isArray(obj)) {
      const newArray = [];
      for (let i = 0; i < obj.length; i++) {
        newArray[i] = CustomUtilitiesFunctions.deepClone(obj[i]);
      }
      return newArray;
    }
  
    const newObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = CustomUtilitiesFunctions.deepClone(obj[key]);
      }
    }
  
    return newObj;
  }
  
  static getRandomNumber(min, max) {
    // Generate a random decimal between 0 and 1
    const randomDecimal = Math.random();
  
    // Scale the random decimal to fit within the desired range
    const randomInRange = randomDecimal * (max - min + 1) + min;
  
    // Use Math.floor to get an integer value
    return Math.floor(randomInRange);
  }

  static trimWhiteSpace(str){
    return (str) ? str.trim() : str;
  }

  static toLowerCase(){
    return str.toLowerCase()
  }

  static upperCaseString(){
    return str.toUpperCase();
  }

  static splitString(deliMeter){
    return str.split(deliMeter)
  }

  static stringLength(){
    return (str) ? str.length : 0;
  }

  static getSubstring(str, startIndex, endIndex){
    return str.substring(startIndex, endIndex);
  }

  static replaceSubstring(str, search, replacement) {
    return str.replace(search, replacement);
  }

  static concatenateArrays(...arrays) {
    return [].concat(...arrays);
  }

  static mergeObjects(...objects) {
    return objects.reduce((merged, obj) => {
      for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (typeof obj[prop] === 'object' && !Array.isArray(obj[prop]) && merged.hasOwnProperty(prop) && typeof merged[prop] === 'object') {
            merged[prop] = CustomUtilitiesFunctions.mergeObjects(merged[prop], obj[prop]); // Recursively merge nested objects
          } else {
            merged[prop] = obj[prop]; // Assign properties
          }
        }
      }
      return merged;
    }, {});
  }

  static isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
  }

  static sanitizeHTML(input) {
    return input.replace(/<[^>]*>/g, '');
  }

  static escapeHTML(input) {
    const escapeChars = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;',
    };
    return input.replace(/[&<>"'`]/g, (match) => escapeChars[match]);
  }

  
  static isValidURL(url) {
    // const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/\S*)?$/;
    // return urlRegex.test(url);
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  static isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/; // Assumes 10-digit format
    return phoneRegex.test(phoneNumber);
  }
  
  static isValidDateFormat(dateString) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Assumes YYYY-MM-DD format
    return dateRegex.test(dateString);
  }
  
}

  /**
 * 
 
// Example usage of the utility functions
const array = [1, 2, 2, 3, 4, 4, 5];
const arrayOfObjects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Charlie' },
];

console.log(CustomUtilitiesFunctions.getUniqueArray(array));
console.log(CustomUtilitiesFunctions.getUniqueObjectsByProperty(arrayOfObjects, 'id'));
console.log(CustomUtilitiesFunctions.sortByProperty(arrayOfObjects, 'id', false));
console.log(CustomUtilitiesFunctions.isNonEmptyString('Hello, World!'));
console.log(CustomUtilitiesFunctions.isDefined(null));
console.log(CustomUtilitiesFunctions.isArray([1, 2, 3]));
console.log(CustomUtilitiesFunctions.isArray([], false));
console.log(CustomUtilitiesFunctions.isObject({ key: 'value' }));
console.log(CustomUtilitiesFunctions.isValidNumber(42));


// Example usage
const person = {
name: 'Alice',
age: 30,
city: 'New York',
};

console.log(CustomUtilitiesFunctions.propertyHasValue(person, 'age', 30));              // true
console.log(CustomUtilitiesFunctions.propertyHasValue(person, 'city', 'Los Angeles'));  // false

// Example usage:
const originalObject = {
a: 1,
b: {
  c: 2,
  d: [3, 4],
},
};

const clonedObject = CustomUtilitiesFunctions.deepClone(originalObject);

console.log(clonedObject);

const minNumber = 1;
const maxNumber = 100;

const randomNum = CustomUtilitiesFunctions.getRandomNumber(minNumber, maxNumber);
console.log(randomNum);

// Example usage:
const object1 = { a: 1, b: { c: 2 } };
const object2 = { b: { d: 3 }, e: 4 };
const mergedObject = CustomUtilitiesFunctions.mergeObjects(object1, object2);

console.log(mergedObject);


// Example usage:
const email = 'user@example.com';
console.log('Is email valid:', CustomUtilitiesFunctions.isValidEmail(email));

const url = 'https://www.example.com';
console.log('Is URL valid:', CustomUtilitiesFunctions.isValidURL(url));

const htmlInput = '<p>Hello, <b>world</b>!</p>';
console.log('Sanitized HTML:', CustomUtilitiesFunctions.sanitizeHTML(htmlInput));

const userInput = '<script>alert("XSS");</script>';
console.log('Escaped HTML:', CustomUtilitiesFunctions.escapeHTML(userInput));

const number = '42';
console.log('Is number valid:', CustomUtilitiesFunctions.isValidNumber(number));
*/