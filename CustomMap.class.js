class CustomMap {
    constructor() {
      this.data = {};
    }
  
    set(key, value) {
      this.data[key] = value;
      return this;
    }
  
    get(key) {
      return this.data[key];
    }
  
    clear() {
      this.data = {};
    }
  
    delete(key) {
      if (this.has(key)) {
        delete this.data[key];
        return true;
      }
      return false;
    }
  
    has(key) {
      return Object.prototype.hasOwnProperty.call(this.data, key);
    }
  
    forEach(callback, thisArg) {
      for (const key in this.data) {
        if (this.has(key)) {
          callback.call(thisArg, this.data[key], key, this);
        }
      }
    }
  
    entries() {
      return Object.entries(this.data);
    }
  
    keys() {
      return Object.keys(this.data);
    }
  
    values() {
      return Object.values(this.data);
    }
  }
  
  // Example usage:
  
  const customMap = new CustomMap();
  
  customMap.set("name", "John");
  customMap.set("age", 30);
  customMap.set("city", "New York");
  
  console.log(customMap.get("name")); // Output: John
  
  customMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  
  console.log([...customMap.entries()]); // Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
  console.log([...customMap.keys()]); // Output: [ 'name', 'age', 'city' ]
  console.log([...customMap.values()]); // Output: [ 'John', 30, 'New York' ]
  
  