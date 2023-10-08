class CustomIterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  next() {
    if (this.hasNext()) {
      return this.collection[this.index++];
    } else {
      throw new Error("No more items to iterate.");
    }
  }

  // Additional methods can be added here for more functionality
}

// Example usage
const items = [1, false, "Devsage", 3.14];
const customIter = new CustomIterator(items);

console.log(customIter.hasNext());

while (customIter.hasNext()) {
  console.log(customIter.next());
}

console.log(customIter.hasNext());
