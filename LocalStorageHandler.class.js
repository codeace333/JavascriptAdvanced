class LocalStorageHandler {
  // Set an item in local storage
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Get an item from local storage
  static getItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Remove an item from local storage
  static removeItem(key) {
    localStorage.removeItem(key);
  }

  // Clear all items in local storage
  static clear() {
    localStorage.clear();
  }

  // Check if a key exists in local storage
  static keyExists(key) {
    return localStorage.getItem(key) !== null;
  }

  // Get an array of all keys in local storage
  static getAllKeys() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i));
    }
    return keys;
  }

  // Get the number of items in local storage
  static getItemCount() {
    return localStorage.length;
  }
}

// Example usage:
LocalStorageHandler.setItem('username', 'John');
const username = LocalStorageHandler.getItem('username');
console.log(username);

LocalStorageHandler.removeItem('username');
LocalStorageHandler.clear();

const exists = LocalStorageHandler.keyExists('username');
console.log(exists);

const keys = LocalStorageHandler.getAllKeys();
console.log(keys);

const itemCount = LocalStorageHandler.getItemCount();
console.log(itemCount);
