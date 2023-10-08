class CustomAsyncGenerator {
    constructor() {
      this.values = [];
      this.index = 0;
    }
  
    async addValueAsync(value) {
      this.values.push(value);
    }
  
    async *[Symbol.asyncIterator]() {
      while (this.index < this.values.length) {
        yield await this.values[this.index++];
      }
    }
  }
  
  // Usage of CustomAsyncGenerator
  const customAsyncGen = new CustomAsyncGenerator();
  
  async function fetchData1() {
    return Promise.resolve('Data from source 1');
  }
  
  async function fetchData2() {
    return Promise.resolve('Data from source 2');
  }
  
  async function fetchData3() {
    return Promise.resolve('Data from source 3');
  }
  
  // Add asynchronous values to the custom async generator
  customAsyncGen.addValueAsync(fetchData1());
  customAsyncGen.addValueAsync(fetchData2());
  customAsyncGen.addValueAsync(fetchData3());
  
  // Iterate through the values asynchronously
  (async () => {
    for await (const value of customAsyncGen) {
      console.log(value);
    }
  })();
  