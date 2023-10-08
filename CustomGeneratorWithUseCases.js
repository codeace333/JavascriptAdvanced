class CustomGenerator {
    constructor() {
      this.prev = 0;
      this.current = 1;
    }
  
    *[Symbol.iterator]() {
      while (true) {
        yield this.current;
        [this.prev, this.current] = [this.current, this.prev + this.current];
      }
    }
  
    next() {
        const value = this.current;
        [this.prev, this.current] = [this.current, this.prev + this.current];
        return { value, done: false };    }
  }
  
  const fibonacciGen = new CustomGenerator();
  
  for (let i = 0; i < 10; i++) {
    console.log(fibonacciGen.next().value);
  }