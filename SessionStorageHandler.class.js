class SessionStorageHandler {
  // Set an item in session storage
  static setItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // Get an item from session storage
  static getItem(key) {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Remove an item from session storage
  static removeItem(key) {
    sessionStorage.removeItem(key);
  }

  // Clear all items in session storage
  static clear() {
    sessionStorage.clear();
  }

  // Check if a key exists in session storage
  static keyExists(key) {
    return sessionStorage.getItem(key) !== null;
  }

  // Get an array of all keys in session storage
  static getAllKeys() {
    const keys = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      keys.push(sessionStorage.key(i));
    }
    return keys;
  }

  // Get the number of items in session storage
  static getItemCount() {
    return sessionStorage.length;
  }
}

// Example usage:
SessionStorageHandler.setItem('username', 'John');
const username = SessionStorageHandler.getItem('username');
console.log(username);

SessionStorageHandler.removeItem('username');
SessionStorageHandler.clear();

const exists = SessionStorageHandler.keyExists('username');
console.log(exists);

const keys = SessionStorageHandler.getAllKeys();
console.log(keys);

const itemCount = SessionStorageHandler.getItemCount();
console.log(itemCount);
