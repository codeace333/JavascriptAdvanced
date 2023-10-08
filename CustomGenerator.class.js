class CustomGenerator {
    constructor() {
      this.index = 0;
      this.values = [];
    }
  
    addValue(value) {
      this.values.push(value);
    }
  
    // Implement the custom iterable protocol
    [Symbol.iterator]() {
      return this;
    }
  
    next() {
      if (this.index < this.values.length) {
        return { value: this.values[this.index++], done: false };
      } else {
        return { done: true };
      }
    }
  }
  
  // Usage
  const customGen = new CustomGenerator();
  customGen.addValue(1);
  customGen.addValue(2);
  customGen.addValue(3);
  
  for (const value of customGen) {
    console.log(value);
  }
  